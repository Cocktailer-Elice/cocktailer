import React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  name: string;
}

export const CocktailListItem = ({ id, name }: Props) => {
  const handleDetailPage = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);

    window.location.href = `/cockcipe/detail/${id}`;
  };
  return (
    <ThumbnailBox onClick={handleDetailPage}>
      레시피 사진<p>{id}</p>
    </ThumbnailBox>
  );
};

const ThumbnailBox = styled.div`
  border: 1px solid black;
  width: auto;
  height: 100px;
  margin: 10px;
`;
