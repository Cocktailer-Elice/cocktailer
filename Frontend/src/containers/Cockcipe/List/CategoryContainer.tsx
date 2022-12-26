import { Box, Grid } from '@mui/material';
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
  const [official, setOfficial] = useState<boolean>(true);
  const [nonOfficial, setNonOfficial] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>('');
  const url = window.location.pathname;
  const categoryId = url.split('/')[3];

  const [categoryList, setCategoryList] = useState<Data[]>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(official, nonOfficial, searchText);
    if (official && nonOfficial) {
      axios
        .get(
          `http://localhost:8000/api/cocktails/?category=${categoryId}&keyword=${searchText}`,
        )
        .then((res) => {
          console.log(res.data.categoryLists);
          setCategoryList(res.data.categoryLists);
        });
    } else if (official && !nonOfficial) {
      axios
        .get(
          `http://localhost:8000/api/cocktails/?category=${categoryId}&keyword=${searchText}&official=true`,
        )
        .then((res) => {
          console.log(res.data.categoryLists);
          setCategoryList(res.data.categoryLists);
        });
    } else if (!official && nonOfficial) {
      axios
        .get(
          `http://localhost:8000/api/cocktails/?category=${categoryId}&keyword=${searchText}&official=false`,
        )
        .then((res) => {
          console.log(res.data.categoryLists);
          setCategoryList(res.data.categoryLists);
        });
    }
  };

  useEffect(() => {
    if (official && nonOfficial) {
      axios
        .get(`http://localhost:8000/api/cocktails/?category=${categoryId}`)
        .then((res) => {
          console.log(res.data.categoryLists);
          setCategoryList(res.data.categoryLists);
        });
    } else if (official && !nonOfficial) {
      axios
        .get(
          `http://localhost:8000/api/cocktails/?category=${categoryId}&official=true`,
        )
        .then((res) => {
          console.log(res.data.categoryLists);
          setCategoryList(res.data.categoryLists);
        });
    } else if (!official && nonOfficial) {
      axios
        .get(
          `http://localhost:8000/api/cocktails/?category=${categoryId}&official=false`,
        )
        .then((res) => {
          console.log(res.data.categoryLists);
          setCategoryList(res.data.categoryLists);
        });
    } else {
      setCategoryList([]);
    }
  }, [official, nonOfficial]);
  return (
    <>
      <CategoryHeader>{categoryId}</CategoryHeader>
      <SearchCocktailInput
        official={official}
        setOfficial={setOfficial}
        nonOfficial={nonOfficial}
        setNonOfficial={setNonOfficial}
        search={searchText}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {categoryList?.map((item, idx) => (
            <Grid item xs={2} sm={4} md={4} key={idx}>
              <CocktailListItem
                key={idx.toString()}
                id={item.id}
                name={item.name}
                official={item.official}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

const CategoryHeader = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;
