import { CockflowBoxTitle } from '../../components/Cockflow/CockflowBoxTitle';
import { Comment } from '../../../../types/commentType';
import { CockflowCommentAdd } from './CockflowCommentAdd';

interface CommentType {
  comments: Comment[];
};

interface TypeComment {
  commentlist: CommentType,
  cockflowId: string | undefined,
  isAuthor: boolean
}

export const CockflowCommentBox = ({ commentlist, cockflowId, isAuthor }: TypeComment) => {
  return (
    <>
      <CockflowBoxTitle replied={commentlist.comments.length} />
      {
        (commentlist.comments).map((item, index) => {
          return (
            <CockflowCommentAdd
              item={item}
              key={commentlist.comments[index]._id}
              cockflowId={cockflowId}
              commentId={commentlist.comments[index]._id}
              isAuthor={isAuthor}
            />
          );
        })
      }
    </>
  );
};

