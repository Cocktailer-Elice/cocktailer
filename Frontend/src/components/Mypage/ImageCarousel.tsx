import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ImageCarouselProps {
  data: ImageListItemProps[];
}
interface ImageListItemProps {
  imgSrc: string;
  title: string;
  link: string;
}

export const ImageCarousel = ({ data }: ImageCarouselProps) => {
  const navigate = useNavigate();
  return (
    <ImageList sx={{ width: '100%', height: '100%' }}>
      {data?.map(({ imgSrc, title, link }: ImageListItemProps) => {
        return (
          <ImageListItem key={imgSrc} onClick={() => navigate('#')}>
            <img
              src={`${imgSrc}?w=248&fit=crop&auto=format`}
              srcSet={`${imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={title}
              loading="lazy"
            />
            <ImageListItemBar title={title} position="below" />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
