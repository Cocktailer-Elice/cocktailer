import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderHomeLogo = () => {
  return (
    <HomeLogo>
      <CustomLink to="/">
        <HomeLogoImage />
        <AppTitle>Cocktailer🍹</AppTitle>
      </CustomLink>
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
  background-color: ${(props) => props.theme.colors.indigo5};
`;

const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const AppTitle = styled.div`
  font-size: 32px;
  letter-spacing: 2px;
  margin-left: 10px;
  font-style: italic;
  color: white;

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

const HomeLogoImage = styled.img`
  width: 50px;
  height: 50px;
`;
