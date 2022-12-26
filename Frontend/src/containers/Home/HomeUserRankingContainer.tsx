import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {userRankingList.map((userRankingInfo, index) => (
          <SwiperSlide key={index}>
            {index === 0 && <Crown icon={faCrown} color="gold" />}
            {index === 1 && <Crown icon={faCrown} color="silver" />}
            {index === 2 && <Crown icon={faCrown} color="	#CD7F32" />}
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
