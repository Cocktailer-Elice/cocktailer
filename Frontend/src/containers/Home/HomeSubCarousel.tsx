import styled from 'styled-components';

const HomeSubCarousel = () => {
  return (
    <HomeSubCarouselWrapper>
      <span>홈 서브 캐러셀</span>
    </HomeSubCarouselWrapper>
  );
};

const HomeSubCarouselWrapper = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid gray;
  padding: 10px;
  margin-bottom: 10px;
`;

export default HomeSubCarousel;
