import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CocktailGetResData, MyCockcipe } from '../../../../types';

interface ScrollProps {
  data?: MyCockcipe[] | CocktailGetResData[];
}

export const Scroll = ({ data }: ScrollProps) => {
  const navigate = useNavigate();
  return (
    <>
      {data ? (
        <Grid container columnSpacing={3}>
          {data?.map(({ id, name, img }) => {
            return (
              <Grid
                item
                key={id}
                onClick={() => navigate(`/cockflows/detail/${id}`)}
              >
                <img src={img} alt={name} />
                <span>{name}</span>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div>내용 없음</div>
      )}
    </>
  );
};
