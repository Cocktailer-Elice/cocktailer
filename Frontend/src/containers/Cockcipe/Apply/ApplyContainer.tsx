import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ApplyButton } from '../../../components/Cockcipe/Apply/ApplyButton';
import { InputCockContent } from '../../../components/Cockcipe/Apply/InputCockContent';
import { InputCockFlavor } from '../../../components/Cockcipe/Apply/InputCockFlavor';
import { InputCockInfo } from '../../../components/Cockcipe/Apply/InputCockInfo';
import { InputRecipe } from '../../../components/Cockcipe/Apply/InputRecipe';
import { InputTitleImg } from '../../../components/Cockcipe/Apply/InputTitleImg';
//import { postCockcipe } from '../../../modules/cockcipeActions';
//import { useAppDispatch } from '../../../modules/store';

export const ApplyContainer = () => {
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

    axios.post('http://localhost:8000/api/cocktails', newData).then((res) => {
      console.log(res);
      console.log(newData);
    });
    // dispatch(postCockcipe({ newData }));
  };
  return (
    <>
      <Header>칵테일 레시피 등록하기</Header>
      <InputTitleImg setImg={setImg} />
      <InputCockInfo
        value={name}
        setName={setName}
        setDegree={setDegree}
        setCategory={setCategory}
        category={category}
      />
      <InputCockFlavor setFlavor={setFlavor} />
      <InputCockContent setContent={setContent} />
      <InputRecipe
        kind="alcohol"
        select={selectA}
        title={titleA}
        value={valueA}
        setSelect={setSelectA}
        setTitle={setTitleA}
        setValue={setValueA}
      />
      <InputRecipe
        kind="drink"
        select={selectI}
        title={titleI}
        value={valueI}
        setSelect={setSelectI}
        setTitle={setTitleI}
        setValue={setValueI}
      />
      <ApplyButton handleApply={handleApply} />
    </>
  );
};

const Header = styled.div`
  font-size: 24px;
  color: #3b5bdb;
  text-align: center;
  margin-top: 20px;
`;
