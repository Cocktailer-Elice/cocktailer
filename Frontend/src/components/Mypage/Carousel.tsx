import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MyCockcipe } from '../../../../types';
import { SectionContainer, SectionWrapper } from './style';

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
        {!cockcipes && <div>비어있음</div>}
        <Button
          onClick={() =>
            navigate(`/mypage/${type === 'likes' ? type : 'cockcipes'}`)
          }
        >
          더 보기
        </Button>
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={5}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
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
                style={{ width: '100px', height: '100px' }}
              />
              {name}
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
