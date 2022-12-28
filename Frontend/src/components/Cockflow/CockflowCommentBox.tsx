import { CockflowBoxTitle } from '../../components/Cockflow/CockflowBoxTitle';
import { Comment } from '../../../../types/commentType';
import { CockflowCommentAdd } from './CockflowCommentAdd';

interface CommentType {
  comments: Comment[];
};

export const CockflowCommentBox = ({ commentlist, cockflowId, commentId, isAuthor }: {
  commentlist: CommentType,
  cockflowId: string | undefined,
  commentId: string,
  isAuthor: boolean
}) => {
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

