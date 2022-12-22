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

interface Kind {
  name: string;
  capacity: number;
}

export const ApplyContainer = () => {
  const [name, setName] = useState<string>('');
  const [degree, setDegree] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [flavor, setFlavor] = useState<string[]>([]);
  const [content, setContent] = useState<string>();
  const [img, setImg] = useState<string>('');
  const [alcohol, setAlcohol] = useState<string>('');
  const [drink, setDrink] = useState<string>('');

  //const dispatch = useAppDispatch();
  const handleApply = () => {
    const newData = {
      owner: 'seeun',
      name: name,
      img: img,
      degree: degree,
      category: category,
      flavor: flavor,
      content: content,
      official: false,
    };
    axios.post('http://localhost:8000/api/cocktails', newData).then((res) => {
      console.log(res.data);
      console.log(newData);
    });
    // dispatch(postCockcipe({ newData }));
  };
  return (
    <>
      <Header>칵테일 레시피 등록하기</Header>
      <InputTitleImg setImg={setImg} />
      <InputCockInfo
        setName={setName}
        setDegree={setDegree}
        setCategory={setCategory}
      />
      <InputCockFlavor setFlavor={setFlavor} />
      <InputCockContent setContent={setContent} />
      <InputRecipe kind="alcohol" ingred={alcohol} setIngred={setAlcohol} />
      <InputRecipe kind="drink" ingred={drink} setIngred={setDrink} />
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
