import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { CocktailRanking } from '../../../../types';
import { CockflowBadge } from './../Cockflow/CockflowBadge';

interface HomeCocktailRankingProps {
  cocktailRankingInfo: CocktailRanking;
}

export const HomeCocktailRanking = ({
  cocktailRankingInfo,
}: HomeCocktailRankingProps) => {
  return (
    <Container>
      <Link to={`/cockcipe/detail/${cocktailRankingInfo.id}`}>
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
          {cocktailRankingInfo.owner.isBartender && <CockflowBadge />}
        </OwnerInfo>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const CocktailImage = styled.img`
  width: 100%;
  height: 60%;
  background-color: ${(props) => props.theme.colors.indigo4};
  border-radius: 5px;
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
  color: ${(props) => props.theme.colors.indigo5};
`;

const CustomThumbUpIcon = styled(ThumbUpIcon)`
  font-size: 12px;
  margin-left: 5px;
  margin-right: 3px;
`;

const CocktailLikes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  margin-top: 8px;
`;

const OwnerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const OwnerName = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
`;
