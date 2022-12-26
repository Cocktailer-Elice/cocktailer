import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface DrawerContentPageButtonProps {
  title: string;
  link: string;
  handleDrawerClose: () => void;
}

export const DrawerContentPageButton = ({
  title,
  link,
  handleDrawerClose,
}: DrawerContentPageButtonProps) => {
  return (
    <Link to={link} onClick={handleDrawerClose}>
      <ContentPageButton>{title}</ContentPageButton>
    </Link>
  );
};

const ContentPageButton = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #3bc9db;

  font-size: 18px;
  font-weight: 600;
  color: whitesmoke;

  :hover {
    opacity: 0.8;
  }
`;
