import styled from 'styled-components';
import CloseButton from '@mui/icons-material/Close';

import { DrawerUserPageButton } from '../../../components/Main/Drawer/DrawerUserPageButton';
import { DrawerContentPageButton } from './../../../components/Main/Drawer/DrawerContentPageButton';
import { loginChecker } from './../../../utils/loginChecker';
import { isLoggedIn } from './../../../../../Backend/src/routers/middlewares/auth/isLoggedIn';

interface DrawerProps {
  handleDrawerToggle: () => void;
}

const menus = [
  { isLoggedInUserMenu: true, pageName: '마이페이지', link: '/mypage' },
  { isLoggedInUserMenu: true, pageName: '로그아웃', link: '/logout' },
  { isLoggedInUserMenu: false, pageName: '로그인', link: '/login' },
  { isLoggedInUserMenu: false, pageName: '회원가입', link: '/join' },
];

export const Drawer = ({ handleDrawerToggle }: DrawerProps) => {
  const isLoggedIn = loginChecker();

  return (
    <>
      <Dimmed onClick={handleDrawerToggle} />
      <DrawerContainer>
        <TopSection>
          <TopLeftSection>
            <UserPageButtonContainer>
              {menus.map(
                (menu) =>
                  isLoggedIn === menu.isLoggedInUserMenu && (
                    <DrawerUserPageButton
                      title={menu.pageName}
                      link={menu.link}
                      handleDrawerToggle={handleDrawerToggle}
                    />
                  ),
              )}
            </UserPageButtonContainer>
          </TopLeftSection>
          <TopRightSection>
            <CloseButtonWrap onClick={handleDrawerToggle}>
              <CloseButton />
            </CloseButtonWrap>
          </TopRightSection>
        </TopSection>
        <BottomSection>
          <DrawerContentPageButton
            pageName="칵시피"
            link="/cockcipe"
            handleDrawerToggle={handleDrawerToggle}
          />
          <DrawerContentPageButton
            pageName="칵플로우"
            link="/cockflow"
            handleDrawerToggle={handleDrawerToggle}
          />
          <DrawerContentPageButton
            pageName="칵고리즘"
            link="/cockgorithm"
            handleDrawerToggle={handleDrawerToggle}
          />
        </BottomSection>
      </DrawerContainer>
    </>
  );
};

const Dimmed = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;

const DrawerContainer = styled.div`
  width: 300px;
  height: 100vh;
  border: 1px solid gray;
  position: absolute;
  background-color: white;
  left: -1px;
  top: 0;
  z-index: 11;
`;

const TopSection = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid gray;
  display: flex;
`;

const TopLeftSection = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  border: 1px solid gray;
`;

const TopRightSection = styled.div`
  width: 50px;
  height: 100%;
  border: 1px solid gray;
`;

const BottomSection = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  border: 1px solid gray;
`;

const UserPageButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
`;

const CloseButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
