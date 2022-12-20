import axios from 'axios'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
`

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
  let params = useParams();

  const [flowtitle, setFlowtitle] = useState('');
  const [data, setData] = useState({
    nickname: '',
    isBartender: false,
    title: '',
    content: '',
    createdAt: '',
  })

  const [flowContent, setFlowcontent] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex vitae ullam? Nihil et, debitis nobis aliquam voluptas possimus illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?illum a exercitationem animi corrupti veritatis unde eaque nesciunt quasi odio?');
  const [comments, setComments] = useState({
    comments: [],
    commentsOwner: []
  })

  const _id = params.cockflowId;

  useEffect(() => {
    console.log(_id)
    // axios.get(`http://localhost:8000/cockflow/${_id}`)
    //   .then(res => {
    //     console.log(res);
    //     const newData =  {
    //       nickname: res.owner.nickname,
    //       isBartender: res.owner.isBartender,
    //       title: res.title,
    //       content: res.content,
    //       createdAt: (res.owner.createdAt).split('T')[0],
    //     }

    //     const newComment = {
    //       comments: res.comments,
    //       commentsOwner: res.commentsOwner
    //     }

    //     setData(newData);
    //     setComments(newComment)
    //   });

    const newData = {
      nickname: mockData.owner.nickname,
      isBartender: mockData.owner.isBartender,
      title: mockData.title,
      content: mockData.content,
      createdAt: (mockData.owner.createdAt).split('T')[0],
    };

    const newComment = {
      comments: mockData.comments,
      commentsOwner: mockData.commentsOwner
    };

    setData(newData);
    setComments(newComment);

  }, [_id]);
  
  let { nickname, isBartender, title, content, createdAt } = data;
  
  return (
    <ContWrap>
      <form>
        <TitleWrap>
          <div>{title}</div>
          <div>
            <span>작성자</span>
            <span>{nickname}</span>
            <span>뱃지 {isBartender}</span>
          </div><br/>
          <div>
            <span>(+)조회수</span>
            <span>생성날짜</span>
            <span>{createdAt}</span>
          </div>
        </TitleWrap>
        <TextBox name="" id="" value={content} onChange={(e) => {setFlowcontent(e.target.value)}} readOnly={actived} />
      </form>
    </ContWrap>
  );
};