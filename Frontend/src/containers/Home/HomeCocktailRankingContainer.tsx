import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Pagination } from 'swiper';

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
        slidesPerView={3.2}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Scrollbar, Pagination]}
        className="cocktailRankingSwiper"
        scrollbar={{ draggable: true }}
      >
        {cocktailRankingList.map((cocktailRankingInfo, index) => (
          <CustomSwiperSlide key={index}>
            <HomeCocktailRanking
              cocktailRankingInfo={cocktailRankingInfo}
              ranking={index + 1}
            />
          </CustomSwiperSlide>
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

const CustomSwiperSlide = styled(SwiperSlide)`
  height: 90%;
`;
