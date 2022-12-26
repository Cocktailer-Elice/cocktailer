import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { APPLY_BARTENDER } from '../../constants/api';

export const BartenderApplyForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    axios.patch(APPLY_BARTENDER);
    navigate('/');
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextWrapper>
        신청해주시면 등록하신 이메일 주소로 연락드리겠습니다. 신청 후에는 신청을
        취소할 수 없습니다. 신청 후, 메인 페이지로 이동됩니다.
      </TextWrapper>
      <Button variant="contained" type="submit">
        신청하기
      </Button>
    </form>
  );
};

const TextWrapper = styled.p`
  padding: 1rem;
`;
