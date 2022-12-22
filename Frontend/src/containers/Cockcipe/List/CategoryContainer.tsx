import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CocktailListItem } from '../../../components/Cockcipe/List/CocktailListItem';
import { SearchCocktailInput } from '../../../components/Cockcipe/List/SearchCocktailInput';

// TODO : 카테고리별 아이템 출력하기
export const CategoryContainer = () => {
  const url = window.location.pathname;
  const categoryId = url.split('/')[3];
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cocktails/category=${categoryId}`)
      .then((res) => console.log(res));
  }, []);
  return (
    <>
      <CategoryHeader>{categoryId}</CategoryHeader>
      <SearchCocktailInput />
      <CocktailListItem />
      <CocktailListItem />
      <CocktailListItem />
      <CocktailListItem />
    </>
  );
};

const CategoryHeader = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;
