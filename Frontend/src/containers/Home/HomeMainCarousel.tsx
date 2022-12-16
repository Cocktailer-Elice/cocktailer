import styled from 'styled-components';

const HomeMainCarousel = () => {
  return (
    <HomeMainCarouselWrapper>
      <span>홈 메인 캐러셀</span>
    </HomeMainCarouselWrapper>
  );
};

const HomeMainCarouselWrapper = styled.div`
  width: 100%;
  height: 20%;
  background-color: orange;
  padding: 10px;
  margin-bottom: 10px;
`;

export default HomeMainCarousel;
