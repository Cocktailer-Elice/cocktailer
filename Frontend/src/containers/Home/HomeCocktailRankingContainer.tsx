import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../swiper.css';
import { HomeCocktailRanking } from './../../components/Home/HomeCocktailRanking';
import { CocktailRanking } from '../../../../types';

interface HomeCocktailRankingContainerProps {
  cocktailRankingList: CocktailRanking[];
}

export const HomeCocktailRankingContainer = ({
  cocktailRankingList,
}: HomeCocktailRankingContainerProps) => {
  return (
    <Carousel>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {cocktailRankingList.map((cocktailRankingInfo, index) => (
          <SwiperSlide key={index}>
            <HomeCocktailRanking
              cocktailRankingInfo={cocktailRankingInfo}
              ranking={index + 1}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Carousel>
  );
};

const Carousel = styled.div`
  width: 100%;
  height: 90%;
  padding: 5px;
`;
