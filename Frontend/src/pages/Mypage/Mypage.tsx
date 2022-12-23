import { Header } from '../../containers/Mypage/Header';
import { Section } from '../../containers/Mypage/Section';
import { loginChecker } from '../../utils/loginChecker';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import { WithdrawlButton } from '../../components/Mypage/WithdrawlButton';

export const Mypage = () => {
  const isLoggedIn = loginChecker();
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(useAppSelector((state) => state.auth));
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);
  return (
    <>
      <Header user={user} />
      <Section type="carousel" data={[]} />
      <Section type="carousel" data={[]} />
      <Section type="board" data={[]} />
      <WithdrawlButton />
    </>
  );
};
