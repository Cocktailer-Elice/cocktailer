import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { CocktailRanking } from '../../../../types';
import { BartenderBadge } from './BartenderBadge';

interface HomeCocktailRankingProps {
  cocktailRankingInfo: CocktailRanking;
}

export const HomeCocktailRanking = ({
  cocktailRankingInfo,
}: HomeCocktailRankingProps) => {
  return (
    <Container>
      <CustomLink to={`/cockcipe/detail/${cocktailRankingInfo.id}`}>
        <CocktailImage src={cocktailRankingInfo.img} />
        <CocktailInfo>
          <CocktailName>{cocktailRankingInfo.name}</CocktailName>
        </CocktailInfo>
        <CocktailLikes>
          <CustomThumbUpIcon />
          {cocktailRankingInfo.likes}
        </CocktailLikes>
        <OwnerInfo>
          <OwnerName>{cocktailRankingInfo.owner.nickname}</OwnerName>
          {cocktailRankingInfo.owner.isBartender && <BartenderBadge />}
        </OwnerInfo>
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
  display: block;
  width: 100%;
  height: 100%;
`;

const CocktailImage = styled.img`
  width: 100%;
  height: 60%;
  background-color: ${(props) => props.theme.colors.indigo1};
  border-radius: 5px;
  border: 2px solid red;
`;

const CocktailInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const CocktailName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.indigo7};
`;

const CustomThumbUpIcon = styled(ThumbUpIcon)`
  font-size: 12px;
  margin-left: 5px;
  margin-right: 3px;
  color: ${(props) => props.theme.colors.indigo4};
`;

const CocktailLikes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.indigo4};
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
`;
