import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InputCockInfo } from '../../../components/Cockcipe/Apply/InputCockInfo';

export const ModifyContainer = () => {
  // state
  const [name, setName] = useState<string>('');
  const [degree, setDegree] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [flavor, setFlavor] = useState<string[]>([]);
  const [content, setContent] = useState<string>();
  const [img, setImg] = useState<string>('');

  const [selectA, setSelectA] = useState<string[]>(['']);
  const [titleA, setTitleA] = useState<string[]>(['']);
  const [valueA, setValueA] = useState<string[]>(['']);

  const [selectI, setSelectI] = useState<string[]>(['']);
  const [titleI, setTitleI] = useState<string[]>(['']);
  const [valueI, setValueI] = useState<string[]>(['']);

  const url = window.location.pathname;
  const cocktailId = url.split('/')[3];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cocktails/${cocktailId}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.cocktail.name);
      });
  }, []);

  //const dispatch = useAppDispatch();

  const handleApply = () => {
    console.log(selectA, titleA, valueA);
    console.log(selectI, titleI, valueI);
    let alcohoObj: any = {};
    let IngredObj: any = {};
    for (let i = 0; i < selectA.length; i++) {
      if (alcohoObj[selectA[i]])
        alcohoObj[selectA[i]].push({ [titleA[i]]: valueA[i] });
      else alcohoObj[selectA[i]] = [{ [titleA[i]]: valueA[i] }];
    }
    for (let i = 0; i < selectI.length; i++) {
      if (IngredObj[selectI[i]])
        IngredObj[selectI[i]].push({ [titleI[i]]: valueI[i] });
      else IngredObj[selectI[i]] = [{ [titleI[i]]: valueI[i] }];
    }

    const newData = {
      owner: 1,
      name: name,
      img: img,
      degree: degree,
      category: category,
      flavor: flavor,
      content: content,
      official: false,
      ratio: {
        alcohol: alcohoObj,
        ingredient: IngredObj,
      },
    };

    // dispatch(postCockcipe({ newData }));
  };

  return (
    <>
      <Header>수정하기</Header>
      <InputCockInfo
        value={name}
        setName={setName}
        setDegree={setDegree}
        setCategory={setCategory}
        category={category}
      />
    </>
  );
};
const Header = styled.div`
  font-size: 24px;
  color: #3b5bdb;
  text-align: center;
  margin-top: 20px;
`;
