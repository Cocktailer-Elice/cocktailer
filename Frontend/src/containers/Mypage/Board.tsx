import { Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MyCockflow, MyComment } from '../../../../types';
import {
  SectionContainer,
  SectionWrapper,
} from '../../components/Mypage/style';

interface BoardProps {
  title: string;
  cockflow?: MyCockflow[];
  comments?: MyComment[];
}

export const Board = ({ title, cockflow, comments }: BoardProps) => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <SectionWrapper>
        <h4>{title}</h4>
        {title === '나의 Cockflow' && (
          <Button onClick={() => navigate('/mypage/cockflows')}>더 보기</Button>
        )}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ fontSize: '0.7rem' }}
        >
          {cockflow?.map(({ id, title, content }) => {
            return (
              <Grid
                item
                xs={6}
                key={id}
                onClick={() => navigate(`/cockflow/detail/${id}`)}
              >
                <GridItem>{title}</GridItem>
                <GridItem>{content}</GridItem>
              </Grid>
            );
          })}
          {comments?.map(({ content, parentCockflow }, idx) => {
            return (
              <Grid
                item
                xs={6}
                key={idx}
                onClick={() =>
                  navigate(`/cockflow/detail/${parentCockflow[0].id}`)
                }
              >
                <GridItem>{content}</GridItem>
              </Grid>
            );
          })}
        </Grid>
      </SectionWrapper>
    </SectionContainer>
  );
};

const GridItem = styled(Paper)`
  text-align: center;
`;
