import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../swiper.css';
import { HomeUserRanking } from './../../components/Home/HomeUserRanking';
import { UserRanking } from '../../../../types';

interface HomeUserRankingContainerProps {
  userRankingList: UserRanking[];
}

export const HomeUserRankingContainer = ({
  userRankingList,
}: HomeUserRankingContainerProps) => {
  return (
    <Carousel>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {userRankingList.map((userRankingInfo, index) => (
          <SwiperSlide key={index}>
            <HomeUserRanking userRankingInfo={userRankingInfo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Carousel>
  );
};

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  padding: 10px;
`;
