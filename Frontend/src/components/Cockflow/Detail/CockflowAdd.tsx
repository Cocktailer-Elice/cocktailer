import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Center } from '../Style/style';
import { CockflowBoxTitle } from '../Common/CockflowBoxTitle';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { POST_COCKFLOW_COMMENTS } from '../../../constants/api';
import { Toast } from '../../../common/Toast';

interface Type {
  cockflowId: string;
}

interface TypeContent {
  content: string;
}

export const CockflowAdd = ({ cockflowId }: Type) => {
  const gets = async (data: any) => {
    await axios
      .post(POST_COCKFLOW_COMMENTS(cockflowId), data)
      .then(function (response) {})
      .catch(function (error) {});
    Toast({
      message: '칵플로우 댓글을 작성하여 +30점을 획득하였습니다!',
      isSuccess: true,
    });
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    if (cockflowId) gets(data);
    reset();
    setTimeout(() => {
      window.location.replace(`/cockflow/detail/${cockflowId}`);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CockflowBoxTitle smallTitle="답글 달기" />
      <TextBox
        placeholder="답글 입력"
        maxLength={250}
        defaultValue=""
        {...register('content')}
      />
      <Center>
        <Button type="submit" variant="contained">
          등록하기
        </Button>
      </Center>
    </form>
  );
};

const TextBox = styled.textarea`
  border-radius: 9px;
  width: 100%;
  height: 150px;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`;
