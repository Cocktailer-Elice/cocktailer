import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { CocktailListItem } from './List/CocktailListItem';
import { SearchCocktailInput } from './List/SearchCocktailInput';
import { useInView } from 'react-intersection-observer';
import { CategoryListItem } from './List/CategoryListItem';
import {
  FIND_CATEGORY_COCKTAILS,
  FIND_CATEGORY_COCKTAILS_OFFI,
  GET_CATEGORY_COCKTAILS,
  GET_CATEGORY_COCKTAILS_OFFI,
  GET_COCKTAILS_SCROLL,
} from '../../constants/api';
interface Obj {
  nickname: string;
  isBartender: boolean;
}

interface Data {
  name: string;
  img: string;
  id: string;
  category: string;
  official: boolean;
  owner: Obj;
}

// TODO : 무한스크롤
export const CategoryWrapper = () => {
  const url = window.location.pathname;
  const categoryId = url.split('/')[3];

  const [official, setOfficial] = useState<boolean>(true);
  const [nonOfficial, setNonOfficial] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>('');
  const page = useRef<number>(10);
  const [categoryList, setCategoryList] = useState<Data[]>([]);
  const [ref, inView] = useInView();
  const [end, setEnd] = useState<number>(10);
  const getList = () => {
    if (end < 10) return;
    axios.get(GET_COCKTAILS_SCROLL(categoryId, page.current)).then((res) => {
      console.log(res.data);
      setCategoryList(() => categoryList.concat(res.data.categoryLists));
      page.current += 10;
      setEnd(res.data.categoryLists.length);
    });
  };

  useEffect(() => {
    if (inView && categoryList.length !== 0) {
      getList();
    }
  }, [inView, getList]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(official, nonOfficial, searchText);
    console.log(event.key);
    if (event.key === 'Enter') {
      if (official && nonOfficial) {
        axios
          .get(FIND_CATEGORY_COCKTAILS(categoryId, searchText))
          .then((res) => {
            console.log(res.data.categoryLists);
            setCategoryList(res.data.categoryLists);
          });
      } else if (official && !nonOfficial) {
        axios
          .get(FIND_CATEGORY_COCKTAILS_OFFI(categoryId, searchText, true))
          .then((res) => {
            console.log(res.data.categoryLists);
            setCategoryList(res.data.categoryLists);
          });
      } else if (!official && nonOfficial) {
        axios
          .get(FIND_CATEGORY_COCKTAILS_OFFI(categoryId, searchText, false))
          .then((res) => {
            console.log(res.data.categoryLists);
            setCategoryList(res.data.categoryLists);
          });
      }
    }
  };

  useEffect(() => {
    if (official && nonOfficial) {
      axios.get(GET_CATEGORY_COCKTAILS(categoryId)).then((res) => {
        setCategoryList(res.data.categoryLists);
      });
    } else if (official && !nonOfficial) {
      axios.get(GET_CATEGORY_COCKTAILS_OFFI(categoryId, true)).then((res) => {
        setCategoryList(res.data.categoryLists);
      });
    } else if (!official && nonOfficial) {
      axios.get(GET_CATEGORY_COCKTAILS_OFFI(categoryId, false)).then((res) => {
        setCategoryList(res.data.categoryLists);
      });
    } else {
      setCategoryList([]);
    }
  }, [official, nonOfficial]);

  return (
    <>
      <CategoryHeader>{categoryId.toUpperCase()} Cocktail</CategoryHeader>
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
              <CategoryListItem
                key={idx.toString()}
                id={item.id}
                name={item.name}
                img={item.img}
                official={item.official}
                owner={item.owner}
              />
            </Grid>
          ))}
        </Grid>
        <div ref={ref}></div>
      </Box>
    </>
  );
};

const CategoryHeader = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;
