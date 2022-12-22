import {
  GetCockflowServiceDto,
  CockflowSubComment,
} from './../types/cockflowType';
export const formatCockflow = (cockflow: GetCockflowServiceDto) => {
  if (cockflow.commentsCount === null) {
    cockflow.comments = [];
    delete cockflow.commentsCount;
    delete cockflow.subComments;
    return cockflow;
  }
  const subComments = cockflow.subComments;

  const formattedSubComments: Map<string, CockflowSubComment> = new Map();

  for (const subComment of subComments!) {
    formattedSubComments.set(subComment.parentCommentId, subComment);
  }

  const comments = cockflow.comments;

  for (const comment of comments) {
    comment.subComments = [];
    for (const subComment of subComments!) {
      if (String(comment._id) === subComment.parentCommentId) {
        comment.subComments.push(subComment);
      }
    }
  }
  delete cockflow.commentsCount;
  delete cockflow.subComments;
  return cockflow;
};
