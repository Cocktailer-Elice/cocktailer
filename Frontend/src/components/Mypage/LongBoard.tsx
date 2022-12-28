import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MyCockflow } from '../../../../types';
import { Empty } from './style';

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
                lg={6}
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
        <Empty>내용 없음</Empty>
      )}
    </>
  );
};
const ContentWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Title = styled.span`
  font-weight: bold;
  margin-bottom: 0.1rem;
  flex: 1;
`;
const Content = styled.span`
  flex: 2;
`;
