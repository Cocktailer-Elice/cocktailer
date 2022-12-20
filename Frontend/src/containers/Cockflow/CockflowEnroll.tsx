import axios from 'axios';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowEnrollBtns } from '../../components/Cockflow/CockflowEnrollBtns';
import { P5 } from '../../components/Cockflow/style';

const InputBox = styled.input`
  width: 100%;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`;

const TextBox = styled.textarea`
  width: 100%;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`;

const gets = async (data: any) => {
  await axios.post('http://localhost:8000/cockflow', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const CockflowEnroll = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    gets(data);
  };

  return (
    <P5>
      <CockflowHeader />
      <CockflowLinkBtn link="/cockflow" title="목록" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputBox
            type="text"
            {...register("title")}
            readOnly={false}
            placeholder="질문 제목을 입력해주세요" />
          <TextBox
            {...register("content")}
            readOnly={false}
            placeholder='질문 내용을 입력해주세요' />
        </div>
        <CockflowEnrollBtns />
      </form>
    </P5>
  );
};