import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Center } from './style';
import { CockflowBoxTitle } from '../../components/Cockflow/CockflowBoxTitle';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const TextBox = styled.textarea`
  width: 100%;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`;

export const CockflowAddComment = ({ cockflowId }:any) => {
  const gets = async (data: any) => {
    await axios.post(`http://localhost:8000/api/cockflow/${cockflowId}/comments`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    gets(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CockflowBoxTitle smallTitle="답글 달기" />
      <TextBox placeholder='답글입력' defaultValue="" {...register("content")} />
      <Center>
        <Button type="submit" variant="contained">등록하기</Button>
      </Center>
    </form>
  );
};
