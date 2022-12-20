import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface DrawerContentPageButtonProps {
  pageName: string;
  link: string;
  toggleDrawer: () => void;
}

export const DrawerContentPageButton = ({
  pageName,
  link,
  toggleDrawer,
}: DrawerContentPageButtonProps) => {
  return (
    <Link to={link} onClick={toggleDrawer}>
      <ContentPageButton>{pageName}</ContentPageButton>
    </Link>
  );
};

const ContentPageButton = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;
