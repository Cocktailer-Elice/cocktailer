import React, { useEffect } from 'react';
import styled from 'styled-components';
import { shareKakao } from './shareKaKao';

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
      <img src="/assets/images/kakao.png" alt="카카오톡 공유 보내기 버튼" />
      <Text>카카오톡으로 공유하기</Text>
    </KakaoBtn>
  );
};

const KakaoBtn = styled.div`
  height: auto;
  box-sizing: border-box;
  margin: 15px 0;
  border-radius: 12px;
  background-color: #fee000;
  display: flex;
  padding-left: 10px;
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 800;
  padding: 10px;
`;
