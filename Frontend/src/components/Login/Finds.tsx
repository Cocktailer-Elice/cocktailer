import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Finds = () => {
  return (
    <FindsWrapper>
      <FindsLink to="/find-email">이메일 찾기</FindsLink>
      <FindsLink to="/find-password">비밀번호 찾기</FindsLink>
    </FindsWrapper>
  );
};

export default Finds;

const FindsWrapper = styled.div`
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: space-around;
`;

const FindsLink = styled(Link)`
  cursor: pointer;
  font-size: 0.8rem;
`;
