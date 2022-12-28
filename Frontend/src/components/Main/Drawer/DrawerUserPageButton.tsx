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
    <CustomLink to={link} onClick={handleDrawerClose}>
      <UserPageButton>{title}</UserPageButton>
    </CustomLink>
  );
};

const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 90px;
  height: 100%;
`;

const UserPageButton = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color: #1098ad;

  :hover {
    opacity: 0.8;
  }
`;
