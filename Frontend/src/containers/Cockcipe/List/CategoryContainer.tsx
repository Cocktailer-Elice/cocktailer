import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CocktailListItem } from '../../../components/Cockcipe/List/CocktailListItem';
import { SearchCocktailInput } from '../../../components/Cockcipe/List/SearchCocktailInput';

interface Data {
  name: string;
  img: string;
  id: string;
  category: string;
  official: boolean;
}

// TODO : 카테고리별 아이템 출력하기
export const CategoryContainer = () => {
  const [official, setOfficial] = useState<boolean>();
  const url = window.location.pathname;
  const categoryId = url.split('/')[3];

  const [categoryList, setCategoryList] = useState<Data[]>();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cocktails/?category=${categoryId}`)
      .then((res) => {
        console.log(res.data.categoryLists);
        setCategoryList(res.data.categoryLists);
      });
  }, []);
  return (
    <>
      <CategoryHeader>{categoryId}</CategoryHeader>
      <SearchCocktailInput />
      {categoryList?.map((item, idx) => (
        <CocktailListItem
          key={idx.toString()}
          id={item.id}
          name={item.name}
          official={item.official}
        />
      ))}
    </>
  );
};

const CategoryHeader = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;
