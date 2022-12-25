import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface DrawerUserPageButtonProps {
  title: string;
  link: string;
  handleDrawerClose: () => void;
}

export const DrawerUserPageButton = ({
  title,
  link,
  handleDrawerClose,
}: DrawerUserPageButtonProps) => {
  return (
    <Link to={link} onClick={handleDrawerClose}>
      <UserPageButton>{title}</UserPageButton>
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
