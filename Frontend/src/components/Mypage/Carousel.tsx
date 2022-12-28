import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { MyCockcipe } from '../../../../types';
import { Empty, SectionContainer, SectionWrapper } from './style';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../swiper.css';

interface SectionProps {
  title: string;
  type: 'mine' | 'likes';
  cockcipes?: MyCockcipe[];
}

export const Carousel = ({ title, cockcipes, type }: SectionProps) => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <SectionWrapper>
        <CarouselTitle>{title}</CarouselTitle>
        {!cockcipes && <Empty>비어있음</Empty>}
        <Button
          onClick={() =>
            navigate(`/mypage/${type === 'likes' ? type : 'cockcipes'}`)
          }
        >
          더 보기
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
          {cockcipes?.map(({ id, name, img }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/cockcipe/detail/${id}`)}
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
