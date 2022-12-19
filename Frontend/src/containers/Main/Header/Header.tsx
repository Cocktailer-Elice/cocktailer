import styled from 'styled-components';
import { HeaderHomeLogo } from '../../../components/Main/Header/HeaderHomeLogo';
import { HeaderHamburgerButton } from '../../../components/Main/Header/HeaderHamburgerButton';
import { Drawer } from './../Drawer/Drawer';
import { useState } from 'react';

export const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <Container>
      <LeftSection>
        <HeaderHamburgerButton setMenuClicked={setMenuClicked} />
      </LeftSection>
      <RightSection>
        <HeaderHomeLogo />
      </RightSection>
      {menuClicked ? <Drawer setMenuClicked={setMenuClicked} /> : <></>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: flex;
`;

const LeftSection = styled.div`
  width: 70px;
  height: 100%;
`;

const RightSection = styled.div`
  width: calc(100% - 70px);
  height: 100%;
`;
