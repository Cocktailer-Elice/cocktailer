import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Right } from './style';
import { CockflowBoxTitle } from '../../components/Cockflow/CockflowBoxTitle';
import { P5 } from '../../components/Cockflow/style';

const Comment = styled.div`
  padding: 15px;
  line-height: 1.8;
`;

interface CommetType {
  comments: ItemsType[] // 임시로 지정하기
}

interface ItemsType {
  content: string,
  owner: string,
  id: number,
  isBartender: boolean,
  nickname: string,
}

// 댓글 박스
export const CockflowCommentBox = ({commentlist}: { commentlist: CommetType }) => {
  console.log(commentlist.comments)
  return (
    <>
      <CockflowBoxTitle replied={commentlist.comments.length} />
      {/* 갯수만큼 반복하기 */}
      {
        (commentlist.comments).map(item => { return (
          <>
            <Comment>
            {item.content}
            </Comment>
            <Right>
              <Button variant="outlined">댓글달기</Button>&nbsp;&nbsp;
              <Button variant="contained">채택하기</Button>
            </Right>
          </>
        )})
      }

      <P5>
        <CockflowBoxTitle smallTitle="댓글달기"/>
      </P5>
    </>
  );
};
