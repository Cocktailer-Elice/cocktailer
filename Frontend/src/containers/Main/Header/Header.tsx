import styled from 'styled-components';
import { HeaderHomeLogo } from '../../../components/Main/Header/HeaderHomeLogo';
import { HeaderHamburgerButton } from '../../../components/Main/Header/HeaderHamburgerButton';
import { Drawer } from './../Drawer/Drawer';
import { useState } from 'react';

export const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderHamburgerButton setMenuClicked={setMenuClicked} />
      <HeaderHomeLogo />
      {menuClicked ? <Drawer setMenuClicked={setMenuClicked} /> : <></>}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: flex;
`;
