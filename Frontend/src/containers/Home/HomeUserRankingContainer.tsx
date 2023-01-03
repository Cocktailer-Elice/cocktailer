import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Pagination } from 'swiper';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        slidesPerView={3.2}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Scrollbar, Pagination]}
        className="userRankingSwiper"
        scrollbar={{ draggable: true }}
      >
        {userRankingList.map((userRankingInfo, index) => (
          <CustomSwiperSlide key={index}>
            {index === 0 && <Crown icon={faCrown} color="gold" />}
            {index === 1 && <Crown icon={faCrown} color="silver" />}
            {index === 2 && <Crown icon={faCrown} color="	#CD7F32" />}
            <HomeUserRanking
              userRankingInfo={userRankingInfo}
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
  padding: 10px;
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  height: 90%;
`;

const Crown = styled(FontAwesomeIcon)`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 5px;
  left: 5px;
  color: ${(props) => props.color};
  transform: rotate(-45deg);

  @media screen and (max-width: 500px) {
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
  }
`;
