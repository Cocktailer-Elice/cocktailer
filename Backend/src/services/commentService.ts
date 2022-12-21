import { SubCommentInfo } from './types/commentType';
import { CommentInfo } from '../services';
import { commentModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';

class CommentService {
  private readonly commentModel = commentModel.Mongo;

  public createComment = async (commentInfo: CommentInfo) => {
    return this.commentModel.create(commentInfo);
  };

  public getCommentsByUserId = async (userId: string) => {
    return this.commentModel.findByUserId(userId);
  };

  public adoptComment = async (
    cockflowId: string,
    commentId: string,
    userId: number,
  ) => {
    const comment = await this.commentModel.findById(commentId);

    if (!comment)
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 답변');
    if (comment.owner !== userId.toString())
      throw new AppError(errorNames.authorizationError, 403, '권한 없음');
    if (comment.cockflowId !== +cockflowId)
      throw new AppError(errorNames.inputError, 400, '비정상적인 요청');

    const result = await this.commentModel.updateAdopted(commentId);
    if (!result.acknowledged || !result.modifiedCount)
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    return;
  };

  public updateCommentLikes = async (
    commentId: string,
    value: number,
    userId: number,
  ) => {
    const comment = await this.commentModel.findById(commentId);
    if (!comment)
      throw new AppError(errorNames.inputError, 400, '해당하는 댓글 없음');
    if (comment.owner === userId.toString())
      throw new AppError(errorNames.businessError, 400, '잘못된 접근');

    const result = await this.commentModel.updateLikes(commentId, value);
    if (!result.acknowledged || !result.modifiedCount)
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    return;
  };

  public deleteComment = async (commentId: string, userId: string) => {
    const comment = await this.commentModel.findById(commentId);
    if (!comment)
      throw new AppError(errorNames.inputError, 400, '해당하는 댓글 없음');
    if (comment.owner !== userId.toString())
      throw new AppError(errorNames.authorizationError, 403, '권한 없음');

    const result = await this.commentModel.deleteById(commentId);
    if (!result.acknowledged || !result.deletedCount)
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    return;
  };

  public addSubcomment = async (subcommentInfo: SubCommentInfo) => {
    console.log(subcommentInfo);
    const comment = await this.commentModel.findById(
      subcommentInfo.parentCommentId,
    );
    if (!comment)
      throw new AppError(errorNames.inputError, 400, '해당하는 댓글 없음');
    await this.commentModel.create(subcommentInfo);
    return;
  };
}

export default CommentService;
