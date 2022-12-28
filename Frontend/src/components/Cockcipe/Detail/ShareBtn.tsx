import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SHARE_KAKAO } from '../../../constants/api';
import { shareKakao } from './shareKaKao';

type CockProps = {
  id: number;
  name: string;
  img: string;
  content: string;
};
// TODO : 배포전 카카오 공유 링크 수정
export const ShareBtn = ({ id, name, img, content }: CockProps) => {
  return (
    <KakaoBtn
      onClick={() =>
        shareKakao(
          `http://localhost:5173/cockcipe/detail/${id}`,
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
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 2px #e9ecef;
  }
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 800;
  padding: 10px;
`;
