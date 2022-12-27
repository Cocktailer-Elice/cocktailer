import styled from 'styled-components';
import HamburgerIcon from '@mui/icons-material/Menu';

interface HeaderHamburgerButtonProps {
  handleDrawerOpen: () => void;
}

export const HeaderHamburgerButton = ({
  handleDrawerOpen,
}: HeaderHamburgerButtonProps) => {
  return (
    <HamburgerButton onClick={handleDrawerOpen}>
      <CustomHamburgerIcon />
    </HamburgerButton>
  );
};

const HamburgerButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.indigo5};
  padding: 20px;
`;

const CustomHamburgerIcon = styled(HamburgerIcon)`
  width: 35px;
  height: 35px;
  color: white;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;
