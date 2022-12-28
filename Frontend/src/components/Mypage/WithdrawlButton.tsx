import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { User } from '../../../../types';

interface WithdrawlButtonProps {
  user: User | null;
  userDelete: () => void;
}

export const WithdrawlButton = ({ user, userDelete }: WithdrawlButtonProps) => {
  const navigate = useNavigate();
  const withdrawl = async () => {
    if (confirm('정말 탈퇴하시겠습니까?')) {
      userDelete();
      alert('탈퇴되었습니다');
      navigate('/');
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
