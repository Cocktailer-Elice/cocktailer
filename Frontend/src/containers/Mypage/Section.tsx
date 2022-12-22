import styled from 'styled-components';
import { ImageCarousel } from '../../components/Mypage/ImageCarousel';
import { Board, Carousel } from '../../components/Mypage/style';

interface SectionProps {
  type: 'carousel' | 'board';
  data: ImageListItemProps[];
}
interface ImageListItemProps {
  imgSrc: string;
  title: string;
  link: string;
}

export const Section = ({ type, data }: SectionProps) => {
  return (
    <SectionContainer>
      {type === 'carousel' ? (
        <Carousel>
          <ImageCarousel data={data} />
        </Carousel>
      ) : (
        <Board></Board>
      )}
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 100%;
  height: 25vh;
  margin-bottom: 0.25rem;
  padding: 0.5rem;
`;
