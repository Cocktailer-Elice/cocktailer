import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderHomeLogo = () => {
  return (
    <HomeLogoWrapper>
      <Link to="/">
        <HomeLogoImage />
      </Link>
    </HomeLogoWrapper>
  );
};

const HomeLogoWrapper = styled.div`
  width: calc(100% - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 70px;
`;

const HomeLogoImage = styled.img`
  width: 150px;
  height: 50px;
`;
