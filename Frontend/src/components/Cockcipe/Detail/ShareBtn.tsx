import React from 'react';
import styled from 'styled-components';

const ShareBtn = () => {
  return <KakaoBtn>카카오톡으로 공유하기</KakaoBtn>;
};

export default ShareBtn;

const KakaoBtn = styled.div`
  background-color: #4263eb;
  height: auto;
  color: #edf2ff;
  padding: 0.2rem;
  box-sizing: border-box;
`;
