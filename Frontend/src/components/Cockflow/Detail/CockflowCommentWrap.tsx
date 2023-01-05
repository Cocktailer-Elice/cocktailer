import { Comment } from '../../../../../types/commentType';
import { CockflowCommentPost } from './CockflowCommentPost';
import { useEffect, useState } from 'react';
import { CockflowBoxTitle } from '../Common/CockflowBoxTitle';

interface CommentType {
  comments: Comment[];
}

interface TypeComment {
  commentlist: CommentType;
  cockflowId: string | undefined;
  isAuthor: boolean;
}

export const CockflowCommentWrap = ({
  commentlist,
  cockflowId,
  isAuthor,
}: TypeComment) => {
  const [adopt, setAdopt] = useState(false);
  useEffect(() => {
    commentlist.comments.forEach((element) => {
      element.isAdopted && setAdopt(true);
    });
  }, [commentlist]);
  return (
    <>
      <CockflowBoxTitle replied={commentlist.comments.length} />
      {commentlist.comments.map((item, index) => {
        return (
          <CockflowCommentPost
            item={item}
            key={commentlist.comments[index]._id}
            cockflowId={cockflowId}
            commentId={commentlist.comments[index]._id}
            isAuthor={isAuthor}
            adopt={adopt}
          />
        );
      })}
    </>
  );
};
