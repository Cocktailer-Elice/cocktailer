import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction } from 'react';

import { DrawerUserButton } from '../../../components/Main/Drawer/DrawerUserButton';
import { DrawerPageButton } from './../../../components/Main/Drawer/DrawerPageButton';

interface DrawerProps {
  setMenuClicked: Dispatch<SetStateAction<boolean>>;
}

export const Drawer = ({ setMenuClicked }: DrawerProps) => {
  const handleCloseButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setMenuClicked(false);
  };

  return (
    <DrawerWrapper>
      <DrawerUserSectionWrapper>
        <DrawerUserButton pageName="로그인" link="/login" />
        <DrawerUserButton pageName="회원가입" link="/join" />
        <DrawerCloseButtonWrapper onClick={handleCloseButtonClick}>
          <CloseIcon />
        </DrawerCloseButtonWrapper>
      </DrawerUserSectionWrapper>
      <DrawerPageSectionWrapper>
        <DrawerPageButton pageName="칵시피" link="/cockcipe" />
        <DrawerPageButton pageName="칵플로우" link="/cockflow" />
        <DrawerPageButton pageName="칵고리즘" link="/cockgorithm" />
      </DrawerPageSectionWrapper>
    </DrawerWrapper>
  );
};

const DrawerWrapper = styled.div`
  width: 300px;
  height: 100%;
  border: 1px solid gray;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const DrawerUserSectionWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  background-color: white;
`;

const DrawerPageSectionWrapper = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  border: 1px solid gray;
  background-color: white;
`;

const DrawerCloseButtonWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
