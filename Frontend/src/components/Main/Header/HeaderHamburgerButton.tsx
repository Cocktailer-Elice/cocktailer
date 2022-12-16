import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Dispatch, SetStateAction } from 'react';

interface HeaderHamburgerButtonProps {
  setMenuClicked: Dispatch<SetStateAction<boolean>>;
}

export const HeaderHamburgerButton = ({
  setMenuClicked,
}: HeaderHamburgerButtonProps) => {
  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setMenuClicked(true);
  };

  return (
    <HamburgerButtonWrapper onClick={handleMenuClick}>
      <MenuIcon />
    </HamburgerButtonWrapper>
  );
};

const HamburgerButtonWrapper = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
