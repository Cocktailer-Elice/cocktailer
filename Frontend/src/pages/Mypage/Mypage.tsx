import { Header } from '../../containers/Mypage/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WithdrawlButton } from '../../components/Mypage/WithdrawlButton';
import { getCurrentUser } from '../../utils/getCurrentUser';
import { Board } from '../../containers/Mypage/Board';
import { Carousel } from '../../containers/Mypage/Carousel';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { GET_USER } from '../../constants/api';
import { MyPostsResData } from '../../../../types';
import { useAuthentication } from '../../hooks/useAuthentication';

export const Mypage = () => {
  const isLoggedIn = useAuthentication();
  const user = getCurrentUser();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<MyPostsResData>();

  const getUserData = async () => {
    const response = await axios.get(GET_USER);
    return response.data;
  };

  useEffect(() => {
    getUserData().then((res) => setUserData(res[0]));
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Helmet>
        <title>Cocktailer | 마이페이지</title>
      </Helmet>
      <Header user={user} />
      <Carousel title="나의 Cockcipe" cockcipes={userData?.cocktails} />
      <Carousel title="내가 좋아한 Cockcipe" cockcipes={userData?.cocktails} />
      <Board title="나의 Cockflow" cockflow={userData?.cockflows} />
      <Board title="나의 Cockflow Comments" comments={userData?.comments} />
      <WithdrawlButton />
    </>
  );
};
