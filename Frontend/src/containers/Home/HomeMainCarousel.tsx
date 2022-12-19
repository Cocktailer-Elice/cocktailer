import styled from 'styled-components';

export const HomeMainCarousel = () => {
  return (
    <MainCarousel>
      <span>홈 메인 캐러셀</span>
    </MainCarousel>
  );
};

const MainCarousel = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  padding: 10px;
`;
