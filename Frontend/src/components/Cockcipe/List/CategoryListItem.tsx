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
      <ImgBox>
        {official ? <OfficialBadge /> : null}
        <img src={img} alt="칵테일 이미지" />
      </ImgBox>
      <>
        <Title>{name}</Title>
        <NickName>{owner.nickname}</NickName>
      </>
    </ThumbnailBox>
  );
};

// TODO : 이미지 출력 시 사이즈 조정
const ThumbnailBox = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  background-color: aliceblue;
  width: auto;
  height: auto;
  margin: 10px;
`;
const ImgBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: palegreen;
`;
const Title = styled.div`
  font-size: 18px;
  align-items: center;
`;
const NickName = styled.div`
  font-size: 14px;
`;
