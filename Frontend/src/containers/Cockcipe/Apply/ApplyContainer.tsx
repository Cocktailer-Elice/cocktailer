import axios from 'axios';
import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import { ApplyButton } from '../../../components/Cockcipe/Apply/ApplyButton';
import { InputCockContent } from '../../../components/Cockcipe/Apply/InputCockContent';
import { InputCockFlavor } from '../../../components/Cockcipe/Apply/InputCockFlavor';
import { InputCockInfo } from '../../../components/Cockcipe/Apply/InputCockInfo';
import { InputRecipe } from '../../../components/Cockcipe/Apply/InputRecipe';
import { InputTitleImg } from '../../../components/Cockcipe/Apply/InputTitleImg';

import cockcipeReducer from './cockcipeReducer';
const initState = {
  name: '',
  degree: 1,
  category: '',
  content: '',
};
export const ApplyContainer = () => {
  const [inputState, dispatch] = useReducer(cockcipeReducer, initState);
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: 'INPUTVALUE',
      payload: { name, value },
    });
  };

  const [flavor, setFlavor] = useState<string[]>([]);
  const [img, setImg] = useState<string>('');

  const [selectA, setSelectA] = useState<string[]>(['']);
  const [titleA, setTitleA] = useState<string[]>(['']);
  const [valueA, setValueA] = useState<string[]>(['']);

  const [selectI, setSelectI] = useState<string[]>(['']);
  const [titleI, setTitleI] = useState<string[]>(['']);
  const [valueI, setValueI] = useState<string[]>(['']);

  const handleApply = () => {
    let alcohoObj: any = {};
    let IngredObj: any = {};
    console.log(inputState);
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
      name: inputState.name,
      img: img,
      degree: inputState.degree,
      category: inputState.category,
      flavor: flavor,
      content: inputState.content,
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
  };
  return (
    <>
      <Header>칵테일 레시피 등록하기</Header>
      <InputTitleImg setImg={setImg} />
      <InputCockInfo props={inputState} handleTextChange={handleTextChange} />
      <InputCockContent
        name="content"
        content={inputState.content}
        handleTextChange={handleTextChange}
      />
      <InputCockFlavor setFlavor={setFlavor} flavor={flavor} />
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
      <ApplyButton handleApply={handleApply} name="apply" />
    </>
  );
};

const Header = styled.div`
  font-size: 24px;
  color: #3b5bdb;
  text-align: center;
  margin-top: 20px;
`;
