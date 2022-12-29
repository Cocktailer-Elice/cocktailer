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

export const CategoryWrapper = () => {
  const url = window.location.pathname;
  const categoryId = url.split('/')[3];

  const [official, setOfficial] = useState<boolean>(true);
  const [nonOfficial, setNonOfficial] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>('');
  const page = useRef<number>(0);
  const [categoryList, setCategoryList] = useState<Data[]>([]);
  const [ref, inView] = useInView();
  const [error, setError] = useState<boolean>(false);
  const [isData, setIsData] = useState<boolean>(false);

  const getList = () => {
    if (error) return;
    axios
      .get(GET_COCKTAILS_SCROLL(categoryId, page.current))
      .then((res) => {
        setCategoryList(() => categoryList.concat(res.data.categoryLists));
        page.current += 10;
      })
      .catch((err) => setError(true));
  };

  useEffect(() => {
    if (inView && categoryList.length !== 0 && page.current > 9) {
      getList();
    }
  }, [inView, getList]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (official && nonOfficial) {
        axios
          .get(FIND_CATEGORY_COCKTAILS(categoryId, searchText))
          .then((res) => {
            setCategoryList(res.data.categoryLists);
            setIsData(false);
          })
          .catch((err) => {
            setCategoryList([]);
            setIsData(true);
          });
      } else if (official && !nonOfficial) {
        axios
          .get(FIND_CATEGORY_COCKTAILS_OFFI(categoryId, searchText, true))
          .then((res) => {
            setCategoryList(res.data.categoryLists);
            setIsData(false);
          })
          .catch((err) => {
            setCategoryList([]);
            setIsData(true);
          });
      } else if (!official && nonOfficial) {
        axios
          .get(FIND_CATEGORY_COCKTAILS_OFFI(categoryId, searchText, false))
          .then((res) => {
            setCategoryList(res.data.categoryLists);
            setIsData(false);
          })
          .catch((err) => {
            setCategoryList([]);
            setIsData(true);
          });
      }
    }
  };

  useEffect(() => {
    if (official && nonOfficial) {
      axios
        .get(GET_CATEGORY_COCKTAILS(categoryId))
        .then((res) => {
          page.current += 10;
          setCategoryList(res.data.categoryLists);
          setIsData(false);
        })
        .catch((err) => {
          setCategoryList([]);
          setIsData(true);
        });
    } else if (official && !nonOfficial) {
      axios
        .get(GET_CATEGORY_COCKTAILS_OFFI(categoryId, true))
        .then((res) => {
          setCategoryList(res.data.categoryLists);
          setIsData(false);
        })
        .catch((err) => {
          setCategoryList([]);
          setIsData(true);
        });
    } else if (!official && nonOfficial) {
      axios
        .get(GET_CATEGORY_COCKTAILS_OFFI(categoryId, false))
        .then((res) => {
          setCategoryList(res.data.categoryLists);
          setIsData(false);
        })
        .catch((err) => {
          setCategoryList([]);
          setIsData(true);
        });
    } else {
      setCategoryList([]);
      setIsData(true);
    }
  }, [official, nonOfficial]);

  return (
    <>
      <CategoryHeader>{categoryId.toUpperCase()} COCKTAIL</CategoryHeader>
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
      {isData ? <ErrorBox>데이터가 없습니다.</ErrorBox> : ''}
    </>
  );
};

const CategoryHeader = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
  font-weight: 800;
  color: #495057;
`;

const ErrorBox = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
  color: red;
`;
