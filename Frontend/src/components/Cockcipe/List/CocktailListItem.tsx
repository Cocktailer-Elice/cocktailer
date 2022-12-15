import React from 'react';
import styled from 'styled-components';

const CocktailListItem = () => {
  return (
    <>
      <Category>카테고리1</Category>
      <div style={{ display: 'flex' }}>
        <ThumbnailBox>레시피 사진</ThumbnailBox>
        <ThumbnailBox>레시피 사진</ThumbnailBox>
        <ThumbnailBox>레시피 사진</ThumbnailBox>
      </div>
      <Category>카테고리2</Category>
      <div style={{ display: 'flex' }}>
        <ThumbnailBox>레시피 사진</ThumbnailBox>
        <ThumbnailBox>레시피 사진</ThumbnailBox>
        <ThumbnailBox>레시피 사진</ThumbnailBox>
      </div>
      <Category>카테고리3</Category>
      <div style={{ display: 'flex' }}>
        <ThumbnailBox>레시피 사진</ThumbnailBox>
        <ThumbnailBox>레시피 사진</ThumbnailBox>
        <ThumbnailBox>레시피 사진</ThumbnailBox>
      </div>
    </>
  );
};

export default CocktailListItem;
const ThumbnailBox = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const Category = styled.p`
  font-size: 15px;
`;
