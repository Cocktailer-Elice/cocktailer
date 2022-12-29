import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MyCockcipe, MyLike } from '../../../../types';
import { Empty } from './style';

interface ScrollProps {
  type: string;
  likes?: MyLike[];
  data?: {
    lists: MyCockcipe[];
  };
}

export const Scroll = ({ type, likes, data }: ScrollProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {type === 'likes' ? (
        <GridContainer>
          {likes?.map(({ id, name, img }) => {
            return (
              <GridContentWrapper
                key={id}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/cockcipe/detail/${id}`)}
              >
                <GridContent>
                  <img src={img} alt={name} style={{ maxWidth: '100px' }} />
                  <span>{name}</span>
                </GridContent>
              </GridContentWrapper>
            );
          })}
        </GridContainer>
      ) : (
        type === 'likes' && <Empty>좋아요한 내용 없음</Empty>
      )}
      {data?.lists?.length !== 0 ? (
        <GridContainer>
          {data?.lists?.map(({ id, name, img }) => {
            return (
              <GridContentWrapper
                key={id}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/cockcipe/detail/${id}`)}
              >
                <GridContent>
                  <img src={img} alt={name} style={{ maxWidth: '100px' }} />
                  <span>{name}</span>
                </GridContent>
              </GridContentWrapper>
            );
          })}
        </GridContainer>
      ) : (
        <Empty>등록된 내용 없음</Empty>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const GridContentWrapper = styled.div`
  min-width: max-content;
`;

const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  max-width: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  span {
    font-size: 0.7rem;
    text-overflow: ellipsis;
    text-align: center;
  }
`;
