import axios from 'axios';
import React, { useState, useEffect } from 'react';

// TODO : 카테고리별 아이템 출력하기
export const CategoryContainer = () => {
  const url = window.location.pathname;
  const categoryId = url.split('/')[3];
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cocktails/category=${categoryId}`)
      .then((res) => console.log(res));
  }, []);
  return <div>CategoryContainer</div>;
};
