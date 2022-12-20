import styled from 'styled-components';
import { HeaderHomeLogo } from '../../../components/Main/Header/HeaderHomeLogo';
import { HeaderHamburgerButton } from '../../../components/Main/Header/HeaderHamburgerButton';
import { Drawer } from './../Drawer/Drawer';
import { useState } from 'react';

export const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer((curr) => !curr);
  };

  return (
    <Container>
      <LeftSection>
        <HeaderHamburgerButton toggleDrawer={toggleDrawer} />
      </LeftSection>
      <RightSection>
        <HeaderHomeLogo />
      </RightSection>
      {drawer ? <Drawer toggleDrawer={toggleDrawer} /> : <></>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const LeftSection = styled.div`
  width: 70px;
  height: 100%;
`;

const RightSection = styled.div`
  width: calc(100% - 70px);
  height: 100%;
`;
