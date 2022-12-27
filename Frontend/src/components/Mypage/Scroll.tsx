import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CocktailGetResData, MyCockcipe } from '../../../../types';
import { Empty } from './style';

interface ScrollProps {
  data?: {
    lists: MyCockcipe[] | CocktailGetResData[];
  };
}

export const Scroll = ({ data }: ScrollProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {data ? (
        <Grid container columns={3} spacing={3}>
          {data?.lists.map(({ id, name, img }) => {
            return (
              <Grid
                item
                key={id}
                onClick={() => navigate(`/cockcipe/detail/${id}`)}
              >
                <GridContent>
                  <img
                    src={
                      img === 'testedURL'
                        ? 'https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg'
                        : img
                    }
                    alt={name}
                    style={{ width: '100px' }}
                  />
                  <span>{name}</span>
                </GridContent>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Empty>내용 없음</Empty>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
