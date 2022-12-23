import axios from 'axios';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { CockflowEnrollBtns } from '../../components/Cockflow/CockflowEnrollBtns';

export const CockflowGetPost = () => {
  const gets = async (data: any) => {
    await axios.post('http://localhost:8000/api/cockflow', data)
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
      <CockflowPostBox>
        <InputBox
          {...register("title")}
          readOnly={false}
          placeholder="질문 제목을 입력해주세요" />
        <TextBox
          defaultValue=""
          {...register("content")}
          readOnly={false}
          placeholder='질문 내용을 입력해주세요' />
      </CockflowPostBox>
      <CockflowEnrollBtns />
    </form>
  );
};

const CockflowPostBox = styled.div`
  border: 1px solid #ddd;
  padding: 10px 15px;
  margin: 7px 0;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 16.5px 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  resize: none;
`;

const TextBox = styled.textarea`
  width: 100%;
  padding: 16.5px 15px;
  border: none;
  resize: none;
  height: 190px;
  line-height: 1.6;
`;
