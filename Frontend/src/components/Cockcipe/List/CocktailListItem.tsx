import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { OfficialBadge } from '../OfficialBadge';

interface Props {
  id: string;
  name: string;
  official: boolean;
  img: string;
}

export const CocktailListItem = ({ id, name, official, img }: Props) => {
  const navigate = useNavigate();
  const handleDetailPage = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    navigate(`/cockcipe/detail/${id}`);
  };
  return (
    <ThumbnailBox onClick={handleDetailPage}>
      <ImgBox>
        <Badge>{official ? <OfficialBadge /> : null}</Badge>
        <img
          src="/assets/images/testimg.svg"
          alt="칵테일 이미지"
          width="150"
          height="150"
        />
      </ImgBox>
      <>
        <CocktailName>{name}</CocktailName>
      </>
    </ThumbnailBox>
  );
};

const ThumbnailBox = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  background-color: aliceblue;
  height: auto;
  margin: 10px;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    width: 100px;
  }
`;
const Badge = styled.div`
  display: flex;
  justify-content: end;
  margin: 5px 5px 0 0;
`;
const ImgBox = styled.div`
  width: 150px;
  @media screen and (max-width: 450px) {
    width: 100px;
    & > img {
      width: 100px;
      height: 100px;
    }
  }
`;

const CocktailName = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #495057;
  margin-bottom: 10px;
`;
