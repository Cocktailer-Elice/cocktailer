import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditAvatarFormSchema } from './EditAvatarFormSchema';
import { UserForm } from '../UserForm/styles';
import { Button } from '@mui/material';
import { AvatarPreview, AvatarPreviewWrapper } from './style';
import axios from 'axios';
import { getCompressedImage } from '../../utils/imageCompression';
import { GET_S3_URL, UPDATE_AVATAR } from '../../constants/api';
import { useNavigate } from 'react-router-dom';
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
  const { register, watch } = methods;
  const [preview, setPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const avatar = watch('avatar');

  const getFileCode = (url: string) => {
    const { pathname } = new URL(url);
    const pathArray = pathname.split('/');
    return pathArray[2];
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await axios.post(GET_S3_URL, { folder: 'avatars' });
      const url = response.data;
      if (avatar && avatar.length > 0) {
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
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [avatar]);
  return (
    <UserForm onSubmit={onSubmitHandler}>
      <AvatarPreviewWrapper>
        <span> 미리보기 </span>
        <AvatarPreview
          src={preview}
          alt={!preview ? '미리보기' : '아바타 이미지'}
        />
        <span>이미지가 정사각형이 아니라면 찌그러질 수 있습니다</span>
      </AvatarPreviewWrapper>
      <input
        {...register('avatar')}
        id="avatar"
        name="avatar"
        type="file"
        accept="image/*"
      />
      <Button type="submit" disabled={isSubmitting}>
        업로드하기
      </Button>
    </UserForm>
  );
};
