import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface DrawerUserPageButtonProps {
  pageName: string;
  link: string;
  handleDrawerToggle: () => void;
}

export const DrawerUserPageButton = ({
  pageName,
  link,
  handleDrawerToggle,
}: DrawerUserPageButtonProps) => {
  return (
    <Link to={link} onClick={handleDrawerToggle}>
      <UserPageButton>{pageName}</UserPageButton>
    </Link>
  );
};

const UserPageButton = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
