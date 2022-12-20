import { useState } from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  width: 100%;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`;

const TextBox = styled.textarea`
  width: 100%;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`;


export const CockflowEnrollBox = ({ actived = true }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <>
      <div>
        <InputBox type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} readOnly={actived} placeholder="질문 제목을 입력해주세요" />
        <TextBox name="" id="" value={content} onChange={(e) => {setContent(e.target.value)}} readOnly={actived} placeholder='질문 내용을 입력해주세요'></TextBox>
      </div>
    </>
  );
};