import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Container>
      <NotFoundImage src="/assets/images/not_found.jpg" />
      <NotFoundErrorCode>404 Not Found</NotFoundErrorCode>
      <NotFoundSpan>페이지를 찾을 수 없습니다.</NotFoundSpan>
      <NotFoundSpan>
        The resource requested could not be found on this server.
      </NotFoundSpan>
      <CustomLink to="/">홈으로 이동</CustomLink>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundImage = styled.img`
  width: 334px;
  height: 302px;
`;

const NotFoundErrorCode = styled.span`
  font-size: 24px;
  margin: 30px;
  font-weight: bold;
`;

const NotFoundSpan = styled.span`
  font-size: 16px;
  margin: 5px 50px;
  text-align: center;
`;

const CustomLink = styled(Link)`
  margin-top: 50px;
`;
