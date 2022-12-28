import React, { useEffect, useState } from 'react';
import { CocktailListItem } from './List/CocktailListItem';
import styled from 'styled-components';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MorePageBtn } from './List/MorePageBtn';
import { GET_COCKTAILS } from '../../constants/api';

// useEffect 데이터 get 후 칵테일 리스트 map 출력
interface Data {
  name: string;
  img: string;
  id: string;
  category: string;
  official: boolean;
}
const ListCarousel = (itemList: Data[]) => (
  <Swiper
    slidesPerView={3}
    loop={true}
    style={{ marginBottom: '20px' }}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    scrollbar={true}
    modules={[Autoplay, Scrollbar]}
  >
    {itemList?.map((item, idx) => (
      <SwiperSlide key={item.id}>
        <CocktailListItem
          key={item.id}
          name={item.name}
          official={item.official}
          img={item.img}
          id={item.id}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export const ListWrapper = () => {
  const [dryList, setDryList] = useState<Data[]>([]);
  const [refreshList, setRefreshList] = useState<Data[]>([]);
  const [fruitList, setFruitList] = useState<Data[]>([]);
  const [sweetList, setSweetList] = useState<Data[]>([]);
  const [smoothieList, setSmoothList] = useState<Data[]>([]);
  const [hotList, setHotList] = useState<Data[]>([]);

  useEffect(() => {
    axios.get(GET_COCKTAILS).then((res) => {
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
      {ListCarousel(dryList)}

      <CategoryContainer>
        <Category>리프레싱 칵테일</Category>
        <MorePageBtn category="refreshing" />
      </CategoryContainer>
      {ListCarousel(refreshList)}

      <CategoryContainer>
        <Category>프루트 칵테일</Category>
        <MorePageBtn category="fruit" />
      </CategoryContainer>
      {ListCarousel(fruitList)}

      <CategoryContainer>
        <Category>스위트 칵테일</Category>
        <MorePageBtn category="sweet" />
      </CategoryContainer>
      {ListCarousel(sweetList)}

      <CategoryContainer>
        <Category>스무디 칵테일</Category>
        <MorePageBtn category="smoothie" />
      </CategoryContainer>
      {ListCarousel(smoothieList)}

      <CategoryContainer>
        <Category>핫 칵테일</Category>
        <MorePageBtn category="hot" />
      </CategoryContainer>
      {ListCarousel(hotList)}
    </>
  );
};

const Category = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #495057;
  margin-left: 20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
