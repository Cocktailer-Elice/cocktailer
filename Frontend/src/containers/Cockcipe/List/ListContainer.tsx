import React, { useEffect, useState } from 'react';
import { CocktailListItem } from '../../../components/Cockcipe/List/CocktailListItem';
import styled from 'styled-components';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MorePageBtn } from '../../../components/Cockcipe/List/MorePageBtn';

// useEffect 데이터 get 후 칵테일 리스트 map 출력
interface Data {
  name: string;
  img: string;
  id: string;
  category: string;
  official: boolean;
}

export const ListContainer = () => {
  const [dryList, setDryList] = useState<Data[]>([]);
  const [refreshList, setRefreshList] = useState<Data[]>([]);
  const [fruitList, setFruitList] = useState<Data[]>([]);
  const [sweetList, setSweetList] = useState<Data[]>([]);
  const [smoothieList, setSmoothList] = useState<Data[]>([]);
  const [hotList, setHotList] = useState<Data[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/cocktails/lists').then((res) => {
      console.log(res.data.lists[0]);
      setDryList(res.data.lists[0]['dry']);
      setRefreshList(res.data.lists[0]['refreshing']);
      setFruitList(res.data.lists[0]['fruit']);
      setSweetList(res.data.lists[0]['refreshing']);
      setSmoothList(res.data.lists[0]['smoothie']);
      setHotList(res.data.lists[0]['hot']);
    });
  }, []);

  return (
    <>
      <CategoryContainer>
        <Category>드라이 칵테일</Category>
        <MorePageBtn category="dry" />
      </CategoryContainer>

      <Swiper slidesPerView={3} loop={true} style={{ marginBottom: '20px' }}>
        {dryList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem
              key={idx}
              name={item.name}
              official={item.official}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CategoryContainer>
        <Category>리프레싱 칵테일</Category>
        <MorePageBtn category="refresh" />
      </CategoryContainer>
      <Swiper slidesPerView={3} loop={true} style={{ marginBottom: '20px' }}>
        {refreshList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem
              key={idx}
              name={item.name}
              official={item.official}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CategoryContainer>
        <Category>프루트 칵테일</Category>
        <MorePageBtn category="fruit" />
      </CategoryContainer>
      <Swiper slidesPerView={3} loop={true} style={{ marginBottom: '20px' }}>
        {fruitList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem
              key={idx}
              name={item.name}
              official={item.official}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CategoryContainer>
        <Category>스위트 칵테일</Category>
        <MorePageBtn category="sweet" />
      </CategoryContainer>
      <Swiper slidesPerView={3} loop={true} style={{ marginBottom: '20px' }}>
        {sweetList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem
              key={idx}
              name={item.name}
              official={item.official}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CategoryContainer>
        <Category>스무디 칵테일</Category>
        <MorePageBtn category="smoothie" />
      </CategoryContainer>
      <Swiper slidesPerView={3} loop={true} style={{ marginBottom: '20px' }}>
        {smoothieList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem
              key={idx}
              name={item.name}
              official={item.official}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CategoryContainer>
        <Category>핫 칵테일</Category>
        <MorePageBtn category="hot" />
      </CategoryContainer>
      <Swiper slidesPerView={3} loop={true} style={{ marginBottom: '20px' }}>
        {hotList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem
              key={idx}
              name={item.name}
              official={item.official}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const Category = styled.p`
  font-size: 20px;
  color: #212529;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
