import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MyCockflow } from '../../../../types';

interface LongBoardProps {
  data?: MyCockflow[];
}

export const LongBoard = ({ data }: LongBoardProps) => {
  const navigate = useNavigate();
  return (
    <>
      {data ? (
        <Grid container columns={2}>
          {data?.map(({ id, title, content }) => {
            return (
              <Grid
                item
                key={id}
                lg={4}
                onClick={() => navigate(`/cockflow/detail/${id}`)}
                sx={{ cursor: 'pointer', padding: '.5rem' }}
              >
                <ContentWrapper>
                  <Title>{title}</Title>
                  <Content>{content}</Content>
                </ContentWrapper>
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
const ContentWrapper = styled.div`
  display: flex;
  border: 1px solid #ddd;
  padding: 0.5rem;
  align-items: center;
  font-size: 0.9rem;
`;

const Title = styled.span`
  font-weight: bold;
  margin-bottom: 0.1rem;
  flex: 0.5;
`;
const Content = styled.span`
  flex: 1;
`;
