import { useState, useEffect } from 'react';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowEnrollBox } from '../../components/Cockflow/CockflowEnrollBox';
import { CockflowAddComment } from '../../components/Cockflow/CockflowAddComment';
import { CockflowCommentBox } from '../../components/Cockflow/CockflowCommentBox';
import { P5 } from '../../components/Cockflow/style';


const mockData1 = {
  comments: [
    {
      nickname: 'hello',
      content: 'content',
      adopted: true,
    },
    {
      nickname: '칵테일ㄹㄹㄹ',
      content: 'content',
      adopted: false,
    },
    {
      nickname: 'ㅎㅎㅎㅎ',
      content: 'content',
      adopted: false,
    },
  ]
}


export const CockflowContent = () => {
  const [data, setData] = useState([{
    nickname: '',
    content: '',
    adopted: false
  }]);
  
  useEffect(() => {
    //axios.get 호출
    // axios.get(`http://localhost:8000/cockflow/?q=1`)
    //   .then(res => setData(res.data.data));
    setData(mockData1.comments)
  }, []);
  return (
    <>
      <CockflowHeader />
      <P5>
        <CockflowLinkBtn link='/cockflow' title='목록' />
        <CockflowEnrollBox />
        <br />
        <CockflowAddComment />
        <CockflowCommentBox />
      </P5>
    </>
  );
};
