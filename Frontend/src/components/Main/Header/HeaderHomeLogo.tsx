import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderHomeLogo = () => {
  return (
    <HomeLogo>
      <Link to="/">
        <HomeLogoImage />
      </Link>
    </HomeLogo>
  );
};

const HomeLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 70px;
`;

const HomeLogoImage = styled.img`
  width: 150px;
  height: 50px;
`;
