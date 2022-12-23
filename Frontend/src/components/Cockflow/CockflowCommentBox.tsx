import { CockflowBoxTitle } from '../../components/Cockflow/CockflowBoxTitle';
import { Comment } from '../../../../types/commentType'
import { CockflowCommentAdd } from './CockflowCommentAdd'

interface CommentType {
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
export const CockflowCommentBox = ({commentlist}: { commentlist: CommentType }) => {

  return (
    <>
      <CockflowBoxTitle replied={commentlist.comments.length} />
      {
        (commentlist.comments).map( (item, index) => { return (
          <CockflowCommentAdd item={item} key={index} />
        )})
      }
    </>
  );
};

