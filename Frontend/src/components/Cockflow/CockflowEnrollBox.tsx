import axios from 'axios'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ContWrap = styled.div`
  // border: 1px solid #ddd;
  border-radius: 7px;
  overflow: hidden;
  color: #555;
`

const TitleWrap = styled.div`
  width: 100%;
  padding: 16.5px 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  resize: none;
`

const InputBox = styled.input`
  display: inline-block;
  width: 100%;
  padding: 16.5px 15px;
`;

const TextBox = styled.textarea`
  width: 100%;
  padding: 10.5px 15px;
  border: none;
  resize: none;
  height: 190px;
  line-height: 1.6;
`;

const mockData = {
  "id": 12,
  "owner": {
      "id": 94,
      "nickname": "달콤한 위스키 #7696",
      "isBartender": false,
      "createdAt": "2022-12-20T09:08:19.442Z",
      "deletedAt": "2022-12-20T14:10:52.155Z"
  },
  "title": "칵플로우 테스트",
  "content": "오늘 홍대 근처에서 소개팅이 있는데 분위기 좋은 칵테일바 추천해주실 분 계신가요~?",
  "deletedAt": null,
  "createdAt": "2022-12-20T09:33:36.238Z",
  "comments": [],
  "commentsOwner": []
}

export const CockflowEnrollBox = ({ actived = true }) => {
  const [title, setTitle] = useState('');
  const [data, setData] = useState({})

  const [content, setContent] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex vitae ullam? Nihil et, debitis nobis aliquam voluptas possimus illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?');

  useEffect(() => {
    axios.get(`http://localhost:8000/cockflow/12`)
      .then(res => {

        console.log(res);
      });
    
  }, [])

  return (
    <ContWrap>
      <form>
        <TitleWrap>
          <div>
            <InputBox type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} readOnly={actived} placeholder="질문 제목을 입력해주세요" />
          </div>
          <span>조회수</span>
        </TitleWrap>
        <TextBox name="" id="" value={content} onChange={(e) => {setContent(e.target.value)}} readOnly={actived} placeholder='질문 내용을 입력해주세요'></TextBox>
      </form>
    </ContWrap>
  );
};