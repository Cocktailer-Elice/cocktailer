import axios from 'axios';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CockflowEnrollBtns } from '../Buttons/CockflowEnrollBtns';
import { COCKFLOW } from '../../../constants/api';
import { Toast } from '../../../common/Toast';
import { useNavigate } from 'react-router-dom';

interface FormValue {
  title: string;
  content: string;
}

export const CockflowGetPost = () => {
  const { register, handleSubmit, reset } = useForm<FormValue>();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValue> = (data): void => {
    if (data.title && data.content) {
      postCockflowList(data);
      Toast({
        message: '칵플로우 질문을 작성하여 +50점을 획득하였습니다!',
        isSuccess: true,
      });
      navigate('/cockflow');
    } else {
      data.title ? alert(`본문을 입력해주세요`) : alert(`제목을 입력해주세요`);
    }
  };

  const postCockflowList = async (data: FormValue) => {
    await axios
      .post(COCKFLOW(), data)
      .then(function (response) {})
      .catch(function (error) {});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CockflowPostBox>
        <InputBox
          {...register('title')}
          readOnly={false}
          maxLength={50}
          placeholder="질문 제목을 입력해주세요"
        />
        <TextBox
          defaultValue=""
          {...register('content')}
          readOnly={false}
          maxLength={250}
          placeholder="질문 내용을 입력해주세요"
        />
      </CockflowPostBox>
      <CockflowEnrollBtns linkto="/cockflow" typeBtn="submit" />
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
