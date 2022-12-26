import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { OfficialBadge } from '../OfficialBadge';

interface Props {
  id: string;
  name: string;
  official: boolean;
}

export const CocktailListItem = ({ id, name, official }: Props) => {
  const navigate = useNavigate();
  const handleDetailPage = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    navigate(`/cockcipe/detail/${id}`);
  };
  return (
    <ThumbnailBox onClick={handleDetailPage}>
      {id}는{name}
      {official ? <OfficialBadge /> : null}
    </ThumbnailBox>
  );
};

const ThumbnailBox = styled.div`
  box-sizing: border-box;
  background-color: #bac8ff;
  border-radius: 10px;
  width: auto;
  height: 100px;
  margin: 10px;
`;
