import {
  GetCockflowServiceDto,
  CockflowSubComment,
} from '../types/cockflowType';
export const formatCockflow = (cockflow: GetCockflowServiceDto) => {
  if (cockflow.commentsCount === null) {
    cockflow.comments = [];
    delete cockflow.commentsCount;
    delete cockflow.subComments;
    return cockflow;
  }
  const subComments = cockflow.subComments;

  const formattedSubComments: Map<string, CockflowSubComment[]> = new Map();

  for (const subComment of subComments as CockflowSubComment[]) {
    if (!formattedSubComments.has(subComment.parentCommentId)) {
      formattedSubComments.set(subComment.parentCommentId, []);
    }
    formattedSubComments.get(subComment.parentCommentId)?.push(subComment);
  }

  const comments = cockflow.comments;

  for (const comment of comments) {
    comment.subComments = [];
    if (formattedSubComments.has(comment._id.toString())) {
      comment.subComments = formattedSubComments.get(
        comment._id.toString(),
      ) as CockflowSubComment[];
    }
  }
  delete cockflow.commentsCount;
  delete cockflow.subComments;
  return cockflow;
};
