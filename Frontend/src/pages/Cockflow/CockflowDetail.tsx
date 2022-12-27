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
import { Container } from '../../components/Cockflow/style';
import { Helmet } from 'react-helmet';

export const CockflowDetail = () => {
  let params = useParams();
  const _id = params.cockflowId;

  const [resData, setResData] = useState<CockflowGetResData | null>(null);

  const [data, setData] = useState({
    _id: 0,
    id: 0,
    title: '',
    isBartender: false,
    nickname: '',
    createdAt: new Date(),
    content: ''
  });

  const [comments, setComments] = useState({
    "_id": "",
    "owner": {
      "id": 0,
      "nickname": "",
      "isBartender": false
    },
    "content": "",
    "subComments": [],
    comments: []
  });

  useEffect(() => {
    axios.get<CockflowGetResData | any>(`/api/cockflow/${_id}`)
      .then(res => {
        console.log(res)
        if (res.data) {
          setResData(res.data);
          const newData = {
            _id: res.data.id,
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
          };
        };
      });
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Cocktailer | 칵플로우 상세보기</title>
      </Helmet>
      <CockflowHeader />
      <P5>
        <CockflowLinkBtn link='/cockflow' title='목록' />
        <CockflowDetailBox detailData={data} />
        {/* (+)삭제를 위해 넘겨줘야하는 값 key={data.id} */}
        <br />
        <CockflowAddComment cockflowId={_id} />
        <CockflowCommentBox cockflowId={_id} commentlist={comments} commentId={'16'} />
      </P5>
    </Container>
  );
};
