import { CockflowBoxTitle } from '../../components/Cockflow/CockflowBoxTitle';
import { Comment } from '../../../../types/commentType'
import { CockflowCommentAdd } from './CockflowCommentAdd'

interface CommetType {
  comments: Comment[];
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
  // console.log(commentlist.comments)

  return (
    // 컴포넌트 분리 >> props로 state를 가져서
    <>
      <CockflowBoxTitle replied={commentlist.comments.length} />
      {
        (commentlist.comments).map( item => { return (
          <CockflowCommentAdd item={item} key={item._id} />
        )})
      }
    </>
  );
};

