import styled from 'styled-components';
import CloseButton from '@mui/icons-material/Close';
import { Dispatch, SetStateAction } from 'react';

import { DrawerUserPageButton } from '../../../components/Main/Drawer/DrawerUserPageButton';
import { DrawerContentPageButton } from './../../../components/Main/Drawer/DrawerContentPageButton';

interface DrawerProps {
  setMenuClicked: Dispatch<SetStateAction<boolean>>;
}

export const Drawer = ({ setMenuClicked }: DrawerProps) => {
  const handleCloseButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setMenuClicked(false);
  };

  return (
    <Container>
      <TopSection>
        <TopLeftSection>
          <UserPageButtonContainer>
            <DrawerUserPageButton pageName="로그인" link="/login" />
            <DrawerUserPageButton pageName="회원가입" link="/join" />
          </UserPageButtonContainer>
        </TopLeftSection>
        <TopRightSection>
          <CloseButtonWrap onClick={handleCloseButtonClick}>
            <CloseButton />
          </CloseButtonWrap>
        </TopRightSection>
      </TopSection>
      <BottomSection>
        <DrawerContentPageButton pageName="칵시피" link="/cockcipe" />
        <DrawerContentPageButton pageName="칵플로우" link="/cockflow" />
        <DrawerContentPageButton pageName="칵고리즘" link="/cockgorithm" />
      </BottomSection>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 100%;
  border: 1px solid gray;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const TopSection = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  background-color: white;
  display: flex;
`;

const TopLeftSection = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  border: 1px solid gray;
  background-color: white;
`;

const TopRightSection = styled.div`
  width: 50px;
  height: 100%;
  border: 1px solid gray;
  background-color: white;
`;

const BottomSection = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  border: 1px solid gray;
  background-color: white;
`;

const UserPageButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  background-color: white;
`;

const CloseButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  background-color: white;
`;
