import React, { useState } from 'react';

import styled from 'styled-components';
import { CocktailApplyData } from '../../../../types';

import { ApplyButton } from './Apply/ApplyButton';
import { InputCockContent } from './Apply/InputCockContent';
import { InputCockFlavor } from './Apply/InputCockFlavor';
import { InputCockInfo } from './Apply/InputCockInfo';
import { InputRecipe } from './Apply/InputRecipe';
import { InputTitleImg } from './Apply/InputTitleImg';

interface ApplyProps {
  apply: (newData: CocktailApplyData) => void;
}
interface Obj {
  [anykey: string]: [{ [anykey: string]: number }];
}

export const ApplyWrapper = ({ apply }: ApplyProps) => {
  // state
  const [name, setName] = useState<string>('');
  const [degree, setDegree] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [flavor, setFlavor] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');
  const [img, setImg] = useState<string>('');

  const [selectA, setSelectA] = useState<string[]>(['']);
  const [titleA, setTitleA] = useState<string[]>(['']);
  const [valueA, setValueA] = useState<number[]>([]);

  const [selectI, setSelectI] = useState<string[]>(['']);
  const [titleI, setTitleI] = useState<string[]>(['']);
  const [valueI, setValueI] = useState<number[]>([]);

  const handleApply = () => {
    let alcohoObj: Obj = {};
    let IngredObj: Obj = {};
    for (let i = 0; i < selectA.length; i++) {
      if (alcohoObj[selectA[i]])
        alcohoObj[selectA[i]].push({ [titleA[i]]: valueA[i] });
      else alcohoObj[selectA[i]] = [{ [titleA[i]]: valueA[i] }];
    }
    if (selectI[0] !== '') {
      for (let i = 0; i < selectI.length; i++) {
        if (IngredObj[selectI[i]])
          IngredObj[selectI[i]].push({ [titleI[i]]: valueI[i] });
        else IngredObj[selectI[i]] = [{ [titleI[i]]: valueI[i] }];
      }
    }

    const newData = {
      name: name,
      img: img,
      degree: degree,
      category: category,
      flavor: flavor,
      content: content,
      ratio: {
        alcohol: alcohoObj,
        ingredient: IngredObj,
      },
    };

    if (
      !Object.keys(alcohoObj).every((current) => current !== '') ||
      !name ||
      !img ||
      !category ||
      !content ||
      !flavor ||
      name.length > 20 ||
      degree < 0 ||
      degree > 100 ||
      flavor.length > 10 ||
      content.length > 200
    ) {
      alert('비어있는 값 혹은 잘못된 입력이 있습니다');
    } else {
      apply(newData);
    }
  };
  return (
    <>
      <Header>칵테일 레시피 등록하기</Header>
      <InputTitleImg setImg={setImg} />
      <InputCockInfo
        value={name}
        degree={degree}
        setName={setName}
        setDegree={setDegree}
        setCategory={setCategory}
        category={category}
      />
      <InputCockFlavor setFlavor={setFlavor} flavor={flavor} />
      <InputCockContent setContent={setContent} content={content} />
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
        kind="plus"
        select={selectI}
        title={titleI}
        value={valueI}
        setSelect={setSelectI}
        setTitle={setTitleI}
        setValue={setValueI}
      />
      <ApplyPlace>
        <ApplyButton handleApply={handleApply} name="apply" />
      </ApplyPlace>
    </>
  );
};

const Header = styled.div`
  font-size: 24px;
  color: #3b5bdb;
  text-align: center;
  margin-top: 20px;
  font-weight: 800;
`;

const ApplyPlace = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 40px;
`;
