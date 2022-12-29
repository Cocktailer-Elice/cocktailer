import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CocktailApplyData } from '../../../../types';
import { GET_DETAIL_COCKTAIL, PATCH_COCKTAIL } from '../../constants/api';
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
export const ModifyWrapper = () => {
  const navigate = useNavigate();
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

  const url = window.location.pathname;
  const cocktailId = parseInt(url.split('/')[3]);

  useEffect(() => {
    const func = async () => {
      const result = await axios.get(GET_DETAIL_COCKTAIL(cocktailId));
      const cocktail = result.data.cocktail;
      setImg(cocktail.img);
      setName(cocktail.name);
      setDegree(cocktail.degree);
      setCategory(cocktail.category);
      setContent(cocktail.content);
      setFlavor(cocktail.flavor);
    };
    func();
  }, []);

  const handleApply = () => {
    let alcohoObj: Obj = {};
    let IngredObj: Obj = {};
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
      name: name,
      img: img,
      degree: degree,
      category: category,
      flavor: flavor,
      content: content,
      ratio: {
        alcohol: Object.keys(alcohoObj).length && alcohoObj,
        ingredient: Object.keys(IngredObj).length && IngredObj,
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
      alert('비어있는 값이 있습니다!');
    } else {
      axios
        .patch(PATCH_COCKTAIL(cocktailId), newData)
        .then((res) => {
          if (res.data.update)
            navigate(`/cockcipe/detail/${res.data.cocktailId}`);
          else throw new Error();
        })
        .catch((err) =>
          alert('수정하는데 문제가 발생했습니다! 관리자에게 문의해보세요'),
        );
    }
  };

  return (
    <>
      <Header>수정하기</Header>
      <InputTitleImg img={img} setImg={setImg} />
      <InputCockInfo
        value={name}
        setName={setName}
        degree={degree}
        setDegree={setDegree}
        setCategory={setCategory}
        category={category}
      />
      <InputCockFlavor setFlavor={setFlavor} flavor={flavor} />
      <InputCockContent content={content} setContent={setContent} />
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
      <ApplyPlace>
        <ApplyButton handleApply={handleApply} name="modify" />
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
