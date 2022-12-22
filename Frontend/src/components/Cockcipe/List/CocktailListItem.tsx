import React from 'react';
import styled from 'styled-components';
import { OfficialBadge } from '../OfficialBadge';

interface Props {
  id: string;
  name: string;
  official: boolean;
}

export const CocktailListItem = ({ id, name, official }: Props) => {
  const handleDetailPage = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);

    window.location.href = `/cockcipe/detail/${id}`;
  };
  return (
    <ThumbnailBox onClick={handleDetailPage}>
      {id}는{name}
      {official ? <OfficialBadge /> : null}
    </ThumbnailBox>
  );
};

const ThumbnailBox = styled.div`
  border: 1px solid black;
  width: auto;
  height: 100px;
  margin: 10px;
`;
