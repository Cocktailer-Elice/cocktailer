import { SubCommentInfo } from './types/commentType';
import { CommentInfo } from '../services';
import { cockflowModel, commentModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';

class CommentService {
  private readonly commentModel = commentModel.Mongo;

  private readonly cockflowModel = cockflowModel.Mongo;

  public createComment = async (commentInfo: CommentInfo) => {
    return this.commentModel.create(commentInfo);
  };

  public getCommentsByUserId = async (userId: string) => {
    return this.commentModel.findByUserId(userId);
  };

  public updateComment = async (
    commentId: string,
    content: string,
    userId: number,
  ) => {
    const comment = await this.commentModel.findById(commentId);
    if (!comment) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 답변');
    }
    if (comment.owner !== userId) {
      throw new AppError(errorNames.authorizationError, 403, '권한 없는 유저');
    }
    const filter = { _id: commentId };
    const update = { content };
    const result = await this.commentModel.update(filter, update);
    if (!result.acknowledged || !result.modifiedCount) {
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    }
    return;
  };

  public adoptComment = async (
    cockflowId: number,
    commentId: string,
    userId: number,
  ) => {
    const cockflow = await this.cockflowModel.findById(cockflowId);
    if (!cockflow) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 칵플로우');
    }
    if (cockflow.owner !== userId) {
      throw new AppError(errorNames.authorizationError, 403, '권한 없음');
    }

    const comment = await this.commentModel.findById(commentId);

    if (!comment) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 답변');
    }
    if (
      comment.cockflowId !== cockflowId ||
      comment.isSubComment ||
      comment.isAdopted
    ) {
      throw new AppError(errorNames.inputError, 400, '비정상적인 요청');
    }
    if (comment.owner === userId) {
      throw new AppError(errorNames.businessError, 400, '자신이 작성한 답변');
    }

    const result = await this.commentModel.updateAdopted(commentId);
    if (!result.acknowledged || !result.modifiedCount) {
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    }
    return;
  };

  public deleteComment = async (commentId: string, userId: number) => {
    const comment = await this.commentModel.findById(commentId);
    if (!comment)
      throw new AppError(errorNames.inputError, 400, '해당하는 댓글 없음');
    if (comment.owner !== userId)
      throw new AppError(errorNames.authorizationError, 403, '권한 없음');

    const result = await this.commentModel.deleteById(commentId);
    if (!result.acknowledged || !result.deletedCount)
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    return;
  };

  public addSubcomment = async (subcommentInfo: SubCommentInfo) => {
    const comment = await this.commentModel.findById(
      subcommentInfo.parentCommentId,
    );
    if (!comment)
      throw new AppError(errorNames.inputError, 400, '해당하는 댓글 없음');
    await this.commentModel.create(subcommentInfo);
    return;
  };

  public updateSubcomment = async (
    cockflowId: number,
    commentId: string,
    subCommentId: string,
    userId: number,
    content: string,
  ) => {
    const cockflow = await this.cockflowModel.findById(cockflowId);
    if (!cockflow) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 칵플로우');
    }

    const subComment = await this.commentModel.findById(subCommentId);

    if (!subComment) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 답변');
    }
    if (
      subComment.cockflowId !== cockflowId ||
      !subComment.isSubComment ||
      commentId !== subComment.parentCommentId
    ) {
      throw new AppError(errorNames.inputError, 400, '비정상적인 요청');
    }
    if (subComment.owner !== userId) {
      throw new AppError(errorNames.authorizationError, 403, '권한 없는 유저');
    }

    const filter = { _id: subCommentId };
    const update = { content };
    const result = await this.commentModel.update(filter, update);
    if (!result.acknowledged || !result.modifiedCount) {
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    }
    return;
  };

  public deleteSubcomment = async (
    cockflowId: number,
    commentId: string,
    subCommentId: string,
    userId: number,
  ) => {
    const cockflow = await this.cockflowModel.findById(cockflowId);
    if (!cockflow) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 칵플로우');
    }

    const subComment = await this.commentModel.findById(subCommentId);

    if (!subComment) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 답변');
    }
    if (
      subComment.cockflowId !== cockflowId ||
      !subComment.isSubComment ||
      commentId !== subComment.parentCommentId
    ) {
      throw new AppError(errorNames.inputError, 400, '비정상적인 요청');
    }
    if (subComment.owner !== userId) {
      throw new AppError(errorNames.authorizationError, 403, '권한 없는 유저');
    }

    const result = await this.commentModel.deleteById(subCommentId);
    if (!result.acknowledged || !result.deletedCount) {
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    }
    return;
  };
}

export default CommentService;

// public updateCommentLikes = async (
//   commentId: string,
//   value: number,
//   userId: number,
// ) => {
//   const comment = await this.commentModel.findById(commentId);
//   if (!comment)
//     throw new AppError(errorNames.inputError, 400, '해당하는 댓글 없음');
//   if (comment.owner === userId.toString())
//     throw new AppError(errorNames.businessError, 400, '잘못된 접근');

//   const result = await this.commentModel.updateLikes(commentId, value);
//   if (!result.acknowledged || !result.modifiedCount)
//     throw new AppError(errorNames.databaseError, 500, '서버 에러');
//   return;
// };
