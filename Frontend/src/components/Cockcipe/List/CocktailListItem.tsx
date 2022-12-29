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
    navigate(`/cockcipe/detail/${id}`);
  };
  return (
    <ThumbnailBox onClick={handleDetailPage}>
      <ImgBox>
        <Badge>{official ? <OfficialBadge /> : null}</Badge>
        <ImgTag src={img} alt="칵테일 이미지" />
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
  margin: 40px 0px;
  padding: 20px 20px;
  // height: 175px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    // width: 100px;
  }
`;
const Badge = styled.div`
  text-align: right;
  margin: 5px 5px 0 0;
`;
const ImgBox = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
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
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ImgTag = styled.img`
  display: inline-block;
  margin: 10px 0;
  width: 100%;
  height: 70%;
  object-fit: cover;
`