import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { CocktailRanking } from '../../../../types';
import { BartenderBadge } from './BartenderBadge';

interface HomeCocktailRankingProps {
  cocktailRankingInfo: CocktailRanking;
  ranking: number;
}

export const HomeCocktailRanking = ({
  cocktailRankingInfo,
  ranking,
}: HomeCocktailRankingProps) => {
  return (
    <Container>
      <CustomLink to={`/cockcipe/detail/${cocktailRankingInfo.id}`}>
        <CocktailImage src={cocktailRankingInfo.img} />
        <CocktailInfos>
          <CocktailInfo>
            <CocktailTitle>
              <Ranking>{ranking}등</Ranking>
              <CocktailName>{cocktailRankingInfo.name}</CocktailName>
            </CocktailTitle>
          </CocktailInfo>
          <CocktailLikes>
            <CustomThumbUpIcon />
            {cocktailRankingInfo.likes}
          </CocktailLikes>
          <OwnerInfo>
            <OwnerName>{cocktailRankingInfo.owner.nickname}</OwnerName>
            {cocktailRankingInfo.owner.isBartender && <BartenderBadge />}
          </OwnerInfo>
        </CocktailInfos>
      </CustomLink>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  :hover {
    opacity: 0.5;
  }
`;

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const CocktailImage = styled.img`
  width: 100%;
  height: 60%;
  background-color: ${(props) => props.theme.colors.indigo1};
  border-radius: 5px;

  @media screen and (max-width: 500px) {
    height: 50%;
  }
`;

const CocktailInfos = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CocktailInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CocktailTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CocktailName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.indigo7};
  word-break: keep-all;

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

const Ranking = styled.div`
  font-size: 14px;
  min-width: 25px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  margin-right: 5px;

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

const CustomThumbUpIcon = styled(ThumbUpIcon)`
  font-size: 12px;
  margin-left: 5px;
  margin-right: 3px;
  color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const CocktailLikes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  margin-top: 8px;

  color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const OwnerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const OwnerName = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;
