import React from 'react';
import styled from 'styled-components';

export const ShareBtn = () => {
  return <KakaoBtn>카카오톡으로 공유하기</KakaoBtn>;
};

const KakaoBtn = styled.div`
  background-color: #4263eb;
  height: auto;
  color: #edf2ff;
  padding: 0.2rem;
  box-sizing: border-box;
`;
