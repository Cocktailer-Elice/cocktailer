import React, { useEffect } from 'react';
import CocktailListItem from '../../../components/Cockcipe/List/CocktailListItem';
import styled from 'styled-components';
import axios from 'axios';

// useEffect 데이터 get 후 칵테일 리스트 map 출력
const ListContainer = () => {
  useEffect(() => {
    axios
      .get('/src/containers/Cockcipe/List/data.json')
      .then((res) => console.log(res));
  }, []);
  return (
    <>
      <Category>카테고리 1</Category>
      <Container>
        <CocktailListItem id={1} />
        <CocktailListItem id={2} />
        <CocktailListItem id={3} />
      </Container>
    </>
  );
};

export default ListContainer;
const Category = styled.p`
  font-size: 15px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
