import React, { useEffect } from 'react';
import styled from 'styled-components';
import { shareKakao } from './shareKaKao';
import { ICocktail } from '../../../containers/Cockcipe/Detail/DetailContainer';
import dotenv from 'dotenv';

type CockProps = {
  id: number;
  name: string;
  img: string;
  content: string;
};

export const ShareBtn = ({ id, name, img, content }: CockProps) => {
  return (
    <KakaoBtn
      onClick={() =>
        shareKakao(
          `http://127.0.0.1:5173/cockcipe/detail/${id}`,
          img,
          name,
          content,
        )
      }
    >
      카카오톡으로 공유하기
    </KakaoBtn>
  );
};

const KakaoBtn = styled.div`
  background-color: #4263eb;
  height: auto;
  color: #edf2ff;
  padding: 0.2rem;
  box-sizing: border-box;
`;
