import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { WITHDRAWAL } from '../../constants/api';

export const WithdrawlButton = () => {
  const navigate = useNavigate();
  const withdrawl = async () => {
    if (confirm('정말 탈퇴하시겠습니까?')) {
      const response = await axios.delete(WITHDRAWAL);
      if (response) {
        alert('탈퇴되었습니다');
        navigate('/');
      }
    }
  };
  return (
    <ButtonWrapper>
      <Button
        type="button"
        onClick={withdrawl}
        sx={{ color: 'red', fontSize: '0.5rem' }}
      >
        탈퇴하기
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
