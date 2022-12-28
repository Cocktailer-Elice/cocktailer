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
    console.log(event);
    navigate(`/cockcipe/detail/${id}`);
  };
  return (
    <ThumbnailBox onClick={handleDetailPage}>
      <Badge>{official ? <OfficialBadge /> : null}</Badge>
      <ImgBox>
        <img src={img} alt="칵테일 이미지" width="150" height="150" />
      </ImgBox>
      <>
        <Title>{name}</Title>
        <NickName>{owner.nickname}</NickName>
      </>
    </ThumbnailBox>
  );
};

const ThumbnailBox = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  background-color: aliceblue;
  margin: 10px;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    width: 150px;
  }
  position: relative;
`;
const Badge = styled.div`
  position: absolute;
  top: 3%;
  left: 85%;
`;
const ImgBox = styled.div`
  width: 150px;
  margin: 0 auto;
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
