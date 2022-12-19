import React, { useEffect, useState } from 'react';
import CocktailListItem from '../../../components/Cockcipe/List/CocktailListItem';
import styled from 'styled-components';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
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
const ListContainer = () => {
  const [cockOneList, setCockOneList] = useState<Data[]>([]);
  const [cockTwoList, setCockTwoList] = useState<Data[]>([]);
  const [cockThreeList, setCockThreeList] = useState<Data[]>([]);
  useEffect(() => {
    axios.get('/src/containers/Cockcipe/List/data.json').then((res) => {
      console.log(res.data);
      for (let key in res.data) {
        console.log(res.data[key]);
        res.data[key].map((item: Data) => {});
      }
      // res.data.data.map((item: Data) => {
      //   console.log(item);
      //   setCockList((prev) => [...prev, item]);
      // });
    });
  }, []);
  return (
    <>
      <Category>카테고리1</Category>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation
        loop={true}
        modules={[Navigation]}
      ></Swiper>
    </>
  );
};

export default ListContainer;
const Category = styled.p`
  font-size: 15px;
`;
