import axios from 'axios';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { CockflowEnrollBtns } from '../../components/Cockflow/CockflowEnrollBtns';
// import { useNavigate } from 'react-router-dom';

export const CockflowGetPost = () => {

  const getsCockflowList = async (data: any) => {
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
    if (data.title && data.content) {
      alert('등록되었습니다');
      getsCockflowList(data);
      window.location.replace(`/cockflow`);
    } else {
      data.title
        ? alert(`본문을 입력해주세요`)
        : alert(`제목을 입력해주세요`)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CockflowPostBox>
        <InputBox
          {...register("title")}
          readOnly={false}
          maxLength={50}
          placeholder="질문 제목을 입력해주세요" />
        <TextBox
          defaultValue=""
          {...register("content")}
          readOnly={false}
          maxLength={250}
          placeholder='질문 내용을 입력해주세요' />
      </CockflowPostBox>
      <CockflowEnrollBtns linkto="/cockflow" />
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
