import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderHamburgerButton = () => {
  return (
    <HamburgerButtonWrapper>
      <MenuIcon />
    </HamburgerButtonWrapper>
  );
};

const HamburgerButtonWrapper = styled.div`
  width: 70px;
  height: 100%;
  background-color: greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;
