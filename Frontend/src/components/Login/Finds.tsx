import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Finds = () => {
  const navigate = useNavigate();
  return (
    <FindsWrapper>
      <FindsButton onClick={() => navigate('/find-email')}>
        이메일 찾기
      </FindsButton>
      <FindsButton onClick={() => navigate('/find-password')}>
        비밀번호 찾기
      </FindsButton>
    </FindsWrapper>
  );
};

export default Finds;

const FindsWrapper = styled.div`
  display: flex;
  padding: 0 5rem;
  justify-content: center;
`;

const FindsButton = styled(Button)`
  font-size: 0.8rem;
  &:last-child {
    margin-left: 1rem;
  }
`;
