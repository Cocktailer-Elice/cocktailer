import styled from 'styled-components';
import { UserRanking } from '../../../../types';
import { BartenderBadge } from './BartenderBadge';

interface HomeUserRankingProps {
  userRankingInfo: UserRanking;
}

export const HomeUserRanking = ({ userRankingInfo }: HomeUserRankingProps) => {
  return (
    <Container>
      <UserAvatar src={userRankingInfo.avatarUrl}></UserAvatar>
      <UserInfo>
        <UserName>
          <UserNickname>{userRankingInfo.nickname}</UserNickname>
          {userRankingInfo.isBartender && <BartenderBadge />}
        </UserName>
        <UserPoint>{userRankingInfo.points} points</UserPoint>
      </UserInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;
`;

const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid red;
`;

const UserInfo = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNickname = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
`;

const UserPoint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 10px;
`;
