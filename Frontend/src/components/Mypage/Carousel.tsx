import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { MyCockcipe, MyLike } from '../../../../types';
import { Empty, SectionContainer, SectionWrapper } from './style';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../swiper.css';

interface SectionProps {
  title: string;
  type: 'mine' | 'likes';
  cockcipes?: MyCockcipe[];
  likes?: MyLike[];
}

export const Carousel = ({ title, cockcipes, likes, type }: SectionProps) => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <SectionWrapper>
        <CarouselTitle>{title}</CarouselTitle>
        <Button
          sx={{ fontSize: '0.7rem' }}
          onClick={() =>
            navigate(`/mypage/${type === 'likes' ? type : 'cockcipes'}`)
          }
        >
          전체 보기
        </Button>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {type === 'mine'
            ? cockcipes?.map(({ id, name, img }) => (
                <SwiperSlide
                  key={id}
                  onClick={() => navigate(`/cockcipe/detail/${id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={
                      img === 'testedURL'
                        ? 'https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg'
                        : img
                    }
                    alt={name}
                    style={{
                      width: '100px',
                      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      objectFit: 'cover',
                    }}
                  />
                </SwiperSlide>
              ))
            : likes?.map(({ id, name, img }) => (
                <SwiperSlide
                  key={id}
                  onClick={() => navigate(`/cockcipe/detail/${id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={
                      img === 'testedURL'
                        ? 'https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg'
                        : img
                    }
                    alt={name}
                    style={{
                      width: '100px',
                      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      objectFit: 'cover',
                    }}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </SectionWrapper>
    </SectionContainer>
  );
};

const CarouselTitle = styled.h4`
  padding: 0.2rem;
`;
