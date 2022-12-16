import styled from 'styled-components';
import { HeaderHomeLogo } from '../../components/Header/HeaderHomeLogo';
import { HeaderHamburgerButton } from './../../components/Header/HeaderHamburgerButton';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderHamburgerButton />
      <HeaderHomeLogo />
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

export default Header;
