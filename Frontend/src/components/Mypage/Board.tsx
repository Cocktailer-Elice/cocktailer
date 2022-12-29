import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MyCockflow, MyComment } from '../../../../types';
import { Empty, SectionContainer, SectionWrapper } from './style';

interface BoardProps {
  title: string;
  type: string;
  cockflow?: MyCockflow[];
  comments?: MyComment[];
}

export const Board = ({ title, type, cockflow, comments }: BoardProps) => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <SectionWrapper>
        <BoardTitle>{title}</BoardTitle>
        <Button
          sx={{ fontSize: '0.7rem' }}
          onClick={() =>
            navigate(
              `/mypage/${type === 'cockflow' ? 'cockflows' : 'comments'}`,
            )
          }
        >
          전체 보기
        </Button>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ fontSize: '0.7rem', overflow: 'hidden' }}
        >
          {cockflow?.map(({ id, title }) => {
            return (
              <Grid
                item
                xs={6}
                key={id}
                onClick={() => navigate(`/cockflow/detail/${id}`)}
                sx={{ cursor: 'pointer' }}
              >
                <ContentWrapper>
                  <Title>{title}</Title>
                </ContentWrapper>
              </Grid>
            );
          })}
          {comments?.map(({ content, parentCockflow }) => {
            return (
              <Grid
                item
                xs={6}
                key={parentCockflow[0].id}
                onClick={() =>
                  navigate(`/cockflow/detail/${parentCockflow[0].id}`)
                }
              >
                <ContentWrapper>
                  <Content>{content}</Content>
                </ContentWrapper>
              </Grid>
            );
          })}
        </Grid>
      </SectionWrapper>
    </SectionContainer>
  );
};

const BoardTitle = styled.h4`
  padding: 0.2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Title = styled.span`
  font-weight: bold;
  margin-bottom: 0.1rem;
`;
const Content = styled.span``;
