import styled from 'styled-components';
import CloseButton from '@mui/icons-material/Close';

import { DrawerUserPageButton } from '../../../components/Main/Drawer/DrawerUserPageButton';
import { DrawerContentPageButton } from './../../../components/Main/Drawer/DrawerContentPageButton';
import { contentMenus } from './../../../constants/pages';
import { useAuthentication } from './../../../hooks/useAuthentication';
import { useCurrentUser } from './../../../hooks/useCurrentUser';

interface DrawerProps {
  handleDrawerClose: () => void;
}

const userMenus = [
  { isLoggedInUserMenu: true, pageName: '마이페이지', link: '/mypage' },
  { isLoggedInUserMenu: true, pageName: '로그아웃', link: '/logout' },
  { isLoggedInUserMenu: false, pageName: '로그인', link: '/login' },
  { isLoggedInUserMenu: false, pageName: '회원가입', link: '/join' },
];

export const Drawer = ({ handleDrawerClose }: DrawerProps) => {
  const isLoggedIn = useAuthentication();
  const user = useCurrentUser();

  return (
    <>
      <Dimmed onClick={handleDrawerClose} />
      <DrawerContainer>
        <TopSection>
          <TopLeftSection>
            {isLoggedIn && (
              <LoggedInUserInfo>{`${user?.nickname} 님 환영합니다.`}</LoggedInUserInfo>
            )}
            <UserPageButtonContainer>
              {userMenus.map(
                (userMenu, index) =>
                  isLoggedIn === userMenu.isLoggedInUserMenu && (
                    <DrawerUserPageButton
                      key={index}
                      title={userMenu.pageName}
                      link={userMenu.link}
                      handleDrawerClose={handleDrawerClose}
                    />
                  ),
              )}
            </UserPageButtonContainer>
          </TopLeftSection>
          <TopRightSection>
            <CloseButtonWrap onClick={handleDrawerClose}>
              <CustomCloseButton />
            </CloseButtonWrap>
          </TopRightSection>
        </TopSection>
        <BottomSection>
          {contentMenus.map((contentMenu, index) => (
            <DrawerContentPageButton
              key={index}
              title={contentMenu.pageName}
              link={contentMenu.link}
              emoji={contentMenu.emoji}
              handleDrawerClose={handleDrawerClose}
            />
          ))}
        </BottomSection>
      </DrawerContainer>
    </>
  );
};

const Dimmed = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;

const DrawerContainer = styled.div`
  width: 60%;
  height: 100vh;
  position: absolute;
  background-color: #15aabf;
  left: -1px;
  top: 0;
  z-index: 11;

  @media screen and (max-width: 500px) {
    width: 75%;
  }
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
`;

const TopLeftSection = styled.div`
  width: calc(100% - 50px);
  padding: 30px;
`;

const TopRightSection = styled.div`
  width: 30px;
  margin-right: 30px;
`;

const BottomSection = styled.div`
  width: 100%;
  height: calc(100% - 50px);
`;

const LoggedInUserInfo = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  padding: 0px 20px;
  color: #0b7285;
  font-weight: bold;
`;

const UserPageButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CloseButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomCloseButton = styled(CloseButton)`
  color: whitesmoke;
  font-size: 30px;
  cursor: pointer;
`;
