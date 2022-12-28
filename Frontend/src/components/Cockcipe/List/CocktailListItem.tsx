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
        <img
          src="/assets/images/testimg.svg"
          alt="칵테일 이미지"
          width="150"
          height="150"
        />
      </ImgBox>

      <>
        <p>
          {name}
          {official ? <OfficialBadge /> : null}
        </p>
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
  cursor: pointer;
`;
const ImgBox = styled.div`
  width: 150px;
  height: 150px;
`;
