import { Header } from '../../containers/Mypage/Header';
import { Section } from '../../containers/Mypage/Section';

export const Mypage = () => {
  return (
    <>
      <Header />
      <Section type="carousel" data={[]} />
      <Section type="carousel" data={[]} />
      <Section type="board" data={[]} />
    </>
  );
};
