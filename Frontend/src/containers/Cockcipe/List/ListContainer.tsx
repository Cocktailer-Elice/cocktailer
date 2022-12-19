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
  const [cockList, setCockList] = useState<Data[]>([]);
  useEffect(() => {
    axios.get('/src/containers/Cockcipe/List/data.json').then((res) => {
      console.log(res.data.data);
      res.data.data.map((item: Data) => {
        console.log(item);
        setCockList((prev) => [...prev, item]);
      });
    });
  }, []);
  return (
    <>
      <Category>카테고리 1</Category>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation
        loop={true}
        modules={[Navigation]}
      >
        {cockList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CocktailListItem key={idx} name={item.name} id={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListContainer;
const Category = styled.p`
  font-size: 15px;
`;
