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
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
