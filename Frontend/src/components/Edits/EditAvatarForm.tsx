import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditAvatarFormSchema } from './EditAvatarFormSchema';
import { UserForm } from '../UserForm/styles';
import { Button } from '@mui/material';
import { AvatarPreview, AvatarPreviewWrapper } from './style';
import axios from 'axios';

interface EditAvatarFormData {
  avatar?: FileList;
}

export const EditAvatarForm = () => {
  const methods = useForm<EditAvatarFormData>({
    resolver: yupResolver(EditAvatarFormSchema),
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const [preview, setPreview] = useState('');
  const avatar = watch('avatar');
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [avatar]);
  const uploadAvatarImage = async () => {
    const response = await axios.post('http://localhost:8000/image-upload', {
      folder: 'avatars',
    });
  };
  const sendAvatarChangeRequest = async () => {
    const response = await axios.put(`http://localhost:8000/users/:userId`);
  };
  const onSubmitHandler = (data: EditAvatarFormData) => {
    console.log(data);
  };
  return (
    <UserForm onSubmit={handleSubmit(onSubmitHandler)}>
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
        accept="images/*"
      />
      <Button type="submit" disabled={isSubmitting}>
        업로드하기
      </Button>
    </UserForm>
  );
};
