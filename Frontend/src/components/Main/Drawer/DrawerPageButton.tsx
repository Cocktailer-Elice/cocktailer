import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface DrawerPageButtonProps {
  pageName: string;
  link: string;
}

export const DrawerPageButton = ({ pageName, link }: DrawerPageButtonProps) => {
  return (
    <Link to={link}>
      <PageButtonWrapper>{pageName}</PageButtonWrapper>
    </Link>
  );
};

const PageButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;
