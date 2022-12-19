import styled from 'styled-components';
import HamburgerIcon from '@mui/icons-material/Menu';
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
    <HamburgerButton onClick={handleMenuClick}>
      <HamburgerIcon />
    </HamburgerButton>
  );
};

const HamburgerButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
