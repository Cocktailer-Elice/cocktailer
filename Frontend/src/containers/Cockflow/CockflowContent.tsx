import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowDetailBox } from '../../components/Cockflow/CockflowDetailBox';
import { CockflowAddComment } from '../../components/Cockflow/CockflowAddComment';
import { CockflowCommentBox } from '../../components/Cockflow/CockflowCommentBox';
import { P5 } from '../../components/Cockflow/style';
import { CockflowGetResData } from '../../../../types/cockflowType';
import { Comment, Comments } from '../../../../types/commentType';

export const CockflowContent = () => {
  let params = useParams();
  const _id = params.cockflowId;

  const [resData, setResData] = useState<CockflowGetResData | null>(null);
    
  const [data, setData] = useState({
    id: 0,
    title: '',
    isBartender: false,
    nickname: '',
    createdAt: new Date(),
    content: ''
  })


  const [comments, setComments] = useState( {
    "_id": "",
    "owner": {
        "id": 0,
        "nickname": "",
        "isBartender": false
    },
    "content": "",
    "subComments": [],
    comments: []
})

  useEffect(() => {
    axios.get<CockflowGetResData | any>(`http://localhost:8000/api/cockflow/${_id}`)
    // axios.get<CockflowGetResData>(`http://localhost:8000/api/cockflow/6`)
      .then(res => {
        console.log(res)
        if (res.data) {
          setResData(res.data);
          const newData = {
            id: res.data.owner.id,
            title: res.data.title,
            isBartender: res.data.owner.isBartender,
            nickname: res.data.owner.nickname,
            createdAt: res.data.createdAt,
            content: res.data.content,
          }
          setData(newData);

          if (res.data.comments) {
            setComments(res.data)
          }
          
        }
      });

    
  }, []);

  return (
    <>
      <CockflowHeader />
      <P5>
        <CockflowLinkBtn link='/cockflow' title='목록' />
        <CockflowDetailBox detailData={data} />
        {/* (+)삭제를 위해 넘겨줘야하는 값 key={data.id} */}
        <br />
        <CockflowAddComment />
        <CockflowCommentBox commentlist={comments} />
      </P5>
    </>
  );
};
