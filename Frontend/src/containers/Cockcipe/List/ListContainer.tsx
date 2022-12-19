import React, { useEffect, useState } from 'react';
import { CocktailListItem } from '../../../components/Cockcipe/List/CocktailListItem';
import styled from 'styled-components';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// useEffect 데이터 get 후 칵테일 리스트 map 출력
interface Data {
  name: string;
  img: string;
  id: string;
  category: string;
}
export const ListContainer = () => {
  const [cockOneList, setCockOneList] = useState<Data[]>([]);
  const [cockTwoList, setCockTwoList] = useState<Data[]>([]);
  const [cockThreeList, setCockThreeList] = useState<Data[]>([]);
  useEffect(() => {
    axios.get('/src/containers/Cockcipe/List/data.json').then((res) => {
      for (let key in res.data) {
        res.data[key].map((item: Data) => {
          if (item.category === 'cate1')
            setCockOneList((prev) => [...prev, item]);
          if (item.category === 'cate2')
            setCockTwoList((prev) => [...prev, item]);
          if (item.category === 'cate3')
            setCockThreeList((prev) => [...prev, item]);
        });
      }
    });
  }, []);
  return (
    <>
      <Category>카테고리1</Category>
      <Swiper slidesPerView={3} loop={true}>
        {cockOneList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem key={idx} name={item.name} id={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Category>카테고리2</Category>
      <Swiper slidesPerView={3} loop={true}>
        {cockTwoList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem key={idx} name={item.name} id={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Category>카테고리3</Category>
      <Swiper slidesPerView={3} loop={true}>
        {cockThreeList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem key={idx} name={item.name} id={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const Category = styled.p`
  font-size: 15px;
`;
