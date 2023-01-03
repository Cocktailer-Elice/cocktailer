import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

export const HomeMainCarousel = () => {
  return (
    <Carousel>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSwiper"
      >
        <CustomSwiperSlide>
          <Link to="/cockcipe">
            <CarouselImage src="/assets/images/main-carousel_1.png" />
            <CarouselTextTopRight>
              <Span>당신만의 칵테일 레시피를</Span>
              <Span>"칵시피"에서 공유하세요!</Span>
            </CarouselTextTopRight>
          </Link>
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <Link to="/cockflow">
            <CarouselImage src="/assets/images/main-carousel_2.png" />
            <CarouselTextBottomLeft>
              <Span>칵테일에 대해 궁금한 점이 있으면</Span>
              <Span>"칵플로우"에서 질문하세요!</Span>
            </CarouselTextBottomLeft>
          </Link>
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <Link to="/cockgorithm">
            <CarouselImage src="/assets/images/main-carousel_3.png" />
            <CarouselTextBottomLeft>
              <Span>칵테일을 추천 받고 싶으신가요?</Span>
              <Span>"칵고리즘을" 이용해 보세요!</Span>
            </CarouselTextBottomLeft>
          </Link>
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <CarouselImage src="/assets/images/main-carousel_4.png" />
          <CarouselTextTopRight>
            <Span>칵테일러 포인트 제도 안내</Span>
            <Span>칵시피 작성 시 +50점</Span>
            <Span>칵플로우 질문 작성 시 +50점</Span>
            <Span>칵플로우 댓글 작성 시 +30점</Span>
          </CarouselTextTopRight>
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <Link to="/bartender-apply">
            <CarouselImage src="/assets/images/main-carousel_5.png" />
            <CarouselTextBottomRight>
              <Span>칵테일러 인증 바텐서 신청 바로가기</Span>
            </CarouselTextBottomRight>
          </Link>
        </CustomSwiperSlide>
      </Swiper>
    </Carousel>
  );
};

const Carousel = styled.div`
  width: 100%;
  height: 100%;
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  margin: 0px;
  padding: 0px;
  position: relative;
`;

const CarouselImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  filter: brightness(70%);
`;

const CarouselTextTopRight = styled.span`
  width: 60%;

  top: 50px;
  right: 80px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  position: absolute;

  @media screen and (max-width: 500px) {
    top: 30px;
    right: 50px;
  }
`;

const CarouselTextBottomLeft = styled.span`
  width: 60%;

  bottom: 50px;
  left: 80px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  position: absolute;

  @media screen and (max-width: 500px) {
    bottom: 30px;
    left: 50px;
  }
`;

const CarouselTextBottomRight = styled.span`
  width: 60%;

  bottom: 50px;
  right: 80px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  position: absolute;

  @media screen and (max-width: 500px) {
    bottom: 30px;
    right: 50px;
  }
`;

const Span = styled.span`
  text-align: center;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);

  font-size: 16px;
  color: #fff;
  font-weight: 600;
  font-style: italic;
  line-height: 1.5;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
