import { useNavigate } from 'react-router-dom';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MyCockcipe } from '../../../../types';
import {
  SectionContainer,
  SectionWrapper,
} from '../../components/Mypage/style';

interface SectionProps {
  title: string;
  cockcipes?: MyCockcipe[];
}

export const Carousel = ({ title, cockcipes }: SectionProps) => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <SectionWrapper>
        <h4>{title}</h4>
        {!cockcipes && <div>비어있음</div>}
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          modules={[Navigation, Scrollbar]}
        >
          {cockcipes?.map(({ id, name, img }) => (
            <SwiperSlide
              key={id + Math.random()}
              onClick={() => navigate(`/cockcipe/${id}`)}
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
