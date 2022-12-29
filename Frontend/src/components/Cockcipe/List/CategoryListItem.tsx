import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { OfficialBadge } from '../OfficialBadge';

interface Obj {
  nickname: string;
  isBartender: boolean;
}

interface Props {
  id: string;
  name: string;
  official: boolean;
  img: string;
  owner: Obj;
}

export const CategoryListItem = ({ id, name, official, img, owner }: Props) => {
  const navigate = useNavigate();
  const handleDetailPage = (event: React.MouseEvent<HTMLDivElement>) => {
    navigate(`/cockcipe/detail/${id}`);
  };
  return (
    <ThumbnailBox onClick={handleDetailPage}>
      <Badge>{official ? <OfficialBadge /> : null}</Badge>
      <ImgBox>
        <ImgTag src={img} alt="칵테일 이미지" />
      </ImgBox>
      <>
        <Title>{name}</Title>
        <NickName>{owner.nickname}</NickName>
      </>
    </ThumbnailBox>
  );
};

const ThumbnailBox = styled.div`
  box-sizing: border-box; 140px;
  border-radius: 10px;
  background-color: aliceblue;
  margin: 10px;
  cursor: pointer;
  text-align: center;
  padding: 20px;
  box-shadow: 0px 0px 10px #ddd;
  @media screen and (max-width: 450px) {
    width: 150px;
  }
  position: relative;
`;
const Badge = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 10px;
`;
const ImgBox = styled.div`
  width: 165px;
  height: 150px;
  text-align: center;
  margin-top: 45px;
  @media screen and (max-width: 450px) {
    width: 120px;
    & > img {
      width: 120px;
      height: 120px;
    }
  }
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #495057;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const NickName = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;
const ImgTag = styled.img`
  display: inline-block;
  width: 100%;
  height: 70%;
  object-fit: cover;
`