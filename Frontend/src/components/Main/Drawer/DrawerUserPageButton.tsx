import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface DrawerUserPageButtonProps {
  pageName: string;
  link: string;
}

export const DrawerUserPageButton = ({
  pageName,
  link,
}: DrawerUserPageButtonProps) => {
  return (
    <Link to={link}>
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
  border: 1px solid green;
`;