import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowDetailBox } from '../../components/Cockflow/CockflowDetailBox';
import { CockflowAddComment } from '../../components/Cockflow/CockflowAddComment';
import { CockflowCommentBox } from '../../components/Cockflow/CockflowCommentBox';
import { P5 } from '../../components/Cockflow/style';


const mockData = {
  "id": 6,
  "owner": {
      "id": 92,
      "nickname": "달콤한 위스키 #72696",
      "isBartender": false
  },
  "title": "칵플로우 테스트",
  "content": "칵테일 맛집 추천해주세요! 역삼역 근처 원해요!",
  "createdAt": "2022-12-20T07:03:53.633Z",
  "comments": [
                {
                  "_id": "63a1e94972b2ab5b772cb95d",
                  "owner": {
                      "id": 96,
                      "nickname": "나의 웬수 진 #6011",
                      "isBartender": false
                  },
                  "content": "홍대 말고 다른 곳으로 가세요!",
                  "subComments": [
                      {
                          "_id": "63a1f393671e4192dd19cec1",
                          "owner": 96,
                          "content": "이것은 대댓글!",
                          "parentCommentId": "63a1e94972b2ab5b772cb95d"
                      },
                      {
                          "_id": "63a1f39f671e4192dd19cec4",
                          "owner": 96,
                          "content": "이것은 대댓글!",
                          "parentCommentId": "63a1e94972b2ab5b772cb95d"
                      },
                      {
                          "_id": "63a2b9e155517d1456900d4e",
                          "owner": 97,
                          "content": "이것은 대댓글!",
                          "parentCommentId": "63a1e94972b2ab5b772cb95d"
                      },
                      {
                          "_id": "63a2ba9255517d1456900d57",
                          "owner": 97,
                          "content": "이것은 대댓글!",
                          "parentCommentId": "63a1e94972b2ab5b772cb95d"
                      }
                  ]
              },
              {
                  "_id": "63a1e96672b2ab5b772cb95f",
                  "owner": {
                      "id": 96,
                      "nickname": "나의 웬수 진 #6011",
                      "isBartender": false
                  },
                  "content": "홍대 말고 다른 곳으로 가세요!",
                  "subComments": []
              },
              {
                  "_id": "63a1eb9dc3cdf7f8782d8004",
                  "owner": {
                      "id": 96,
                      "nickname": "나의 웬수 진 #6011",
                      "isBartender": false
                  },
                  "content": "홍대 말고 다른 곳으로 가세요!",
                  "subComments": [
                      {
                          "_id": "63a30f93f4436cae93c7da05",
                          "owner": 98,
                          "content": "새로운 대댓글!",
                          "parentCommentId": "63a1eb9dc3cdf7f8782d8004"
                      }
                  ]
              },
              {
                  "_id": "63a2b9d655517d1456900d4b",
                  "owner": {
                      "id": 97,
                      "nickname": "사랑스런 데킬라 #8481",
                      "isBartender": false
                  },
                  "content": "홍대 말고 다른 곳으로 가세요!",
                  "subComments": []
              }
  ]
}

export const CockflowContent = () => {
  let params = useParams();
  const _id = params.cockflowId;

  const [flowtitle, setFlowtitle] = useState('');
  const [data, setData] = useState({
    nickname: '',
    id: 0,
    isBartender: false,
    title: '',
    content: '',
    createdAt: '',
  })


  const [comments, setComments] = useState({
    comments: [{}],
  })

  useEffect(() => {
    // axios.get(`http://localhost:8000/cockflow/${_id}`)
    //   .then(res => {
    //     console.log(res);
    //     const newData =  {
    //       nickname: res.owner.nickname,
    //       id: res.owner.id,
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

    // const newData =  {
    //   nickname: res.owner.nickname,
    //   id: res.owner.id,
    //   isBartender: res.owner.isBartender,
    //   title: res.title,
    //   content: res.content,
    //   createdAt: (res.owner.createdAt).split('T')[0],
    // }

    const newData = {
      nickname: mockData.owner.nickname,
      id: mockData.owner.id,
      isBartender: mockData.owner.isBartender,
      title: mockData.title,
      content: mockData.content,
      createdAt: (mockData.createdAt).split('T')[0],
    };

    setData(newData);

    const newComment = {
      comments: mockData.comments, // 배열
    };

    setComments(newComment)

  }, [_id]);

  return (
    <>
      <CockflowHeader />
      <P5>
        <CockflowLinkBtn link='/cockflow' title='목록' />
        <CockflowDetailBox newData={data} />
        {/* key={data.id} */}
        <br />
        <CockflowAddComment />
        <CockflowCommentBox commentlist={comments} />
      </P5>
    </>
  );
};
