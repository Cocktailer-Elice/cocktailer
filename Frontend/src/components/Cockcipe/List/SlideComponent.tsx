import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import styled from 'styled-components';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const SlideComponent = () => {
  return (
    <>
      <Category>{}</Category>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation
        loop={true}
        modules={[Navigation]}
      >
        {}
      </Swiper>
    </>
  );
};

const Category = styled.p`
  font-size: 15px;
`;
