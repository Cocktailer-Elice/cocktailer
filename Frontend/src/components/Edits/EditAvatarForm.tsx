import { useForm, useWatch } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditAvatarFormSchema } from './EditAvatarFormSchema';
import { FormWrapper, UserForm } from '../UserForm/styles';
import { Button } from '@mui/material';
import { AvatarPreview, AvatarPreviewWrapper } from './style';
import axios from 'axios';
import { getCompressedImage } from '../../utils/imageCompression';
import { GET_S3_URL, UPDATE_AVATAR } from '../../constants/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../store/store';
import { userRefresh } from '../../store/authActions';

interface EditAvatarFormData {
  avatar?: FileList;
}

export const EditAvatarForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const methods = useForm<EditAvatarFormData>({
    resolver: yupResolver(EditAvatarFormSchema),
  });
  const { register } = methods;
  const [preview, setPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const avatar = useWatch({ control: methods.control, name: 'avatar' });

  const getFileCode = (url: string) => {
    const { pathname } = new URL(url);
    const pathArray = pathname.split('/');
    return pathArray[2];
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (avatar && avatar.length > 0) {
      setIsSubmitting(true);
      const { data: url } = await axios.get<string>(GET_S3_URL('avatars'), {
        withCredentials: false,
      });
      const file = avatar[0];
      const compressedFile = await getCompressedImage(file);
      await axios.put(url, compressedFile, {
        withCredentials: false,
        headers: {
          'Content-Type': file.type,
        },
      });
      const fileCode = getFileCode(url);
      await axios.patch(UPDATE_AVATAR, { avatarUrl: fileCode });
      alert('변경이 완료되었습니다');
      dispatch(userRefresh());
      navigate('/mypage');
    } else {
      alert('파일을 선택해주세요');
    }
  };

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [avatar]);
  return (
    <FormWrapper>
      <UserForm onSubmit={onSubmitHandler}>
        <AvatarPreviewWrapper>
          <Guide> - 미리보기 - </Guide>
          <AvatarPreview
            src={preview}
            alt={!preview ? '미리보기' : '아바타 이미지'}
          />
          <Guide>이미지가 정사각형이 아니라면 찌그러질 수 있습니다</Guide>
        </AvatarPreviewWrapper>
        <AvatarInputWrapper>
          <AvatarInput
            {...register('avatar')}
            id="avatar"
            name="avatar"
            type="file"
            accept="image/*"
          />
        </AvatarInputWrapper>
        <Button type="submit" disabled={isSubmitting}>
          업로드하기
        </Button>
      </UserForm>
    </FormWrapper>
  );
};

const Guide = styled.span`
  font-size: 0.9rem;
`;
const AvatarInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AvatarInput = styled.input`
  width: 60%;
  height: 2rem;
  margin: 1rem 0;
`;
