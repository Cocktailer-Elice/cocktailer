import styled from 'styled-components';

const HomeSubCarousel = () => {
  return (
    <SubCarousel>
      <span>홈 서브 캐러셀</span>
    </SubCarousel>
  );
};

const SubCarousel = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  padding: 10px;
`;

export default HomeSubCarousel;
