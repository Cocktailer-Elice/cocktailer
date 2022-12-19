import React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  name: string;
}

const CocktailListItem = ({ id, name }: Props) => {
  const handleDetailPage = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    window.location.href = `/cockcipe/detail`;
  };
  return (
    <ThumbnailBox onClick={handleDetailPage}>
      레시피 사진<p>{id}</p>
    </ThumbnailBox>
  );
};

export default CocktailListItem;
const ThumbnailBox = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin: 10px;
`;
