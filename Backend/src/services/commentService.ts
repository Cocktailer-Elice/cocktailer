import { ICommentDependencies, SubCommentInfo } from './types/commentType';
import { CommentInfo } from '../services';
import { cockflowModel, commentModel } from '../db';
import { AppError } from '../errorHandler';
import { errorNames } from '../errorNames';

class CommentDependencies implements ICommentDependencies {
  public commentModel = commentModel.Mongo;

  public cockflowModel = cockflowModel.Mongo;
}

class CommentService {
  constructor(private readonly dependencies: CommentDependencies) {}

  public createComment = async (commentInfo: CommentInfo) => {
    return this.dependencies.commentModel.create(commentInfo);
  };

  public getMyComments = async (userId: number) => {
    const comments = await this.dependencies.commentModel.findByUserId(userId);
    return comments;
  };

  public updateComment = async (
    commentId: string,
    content: string,
    userId: number,
  ) => {
    const comment = await this.dependencies.commentModel.findById(commentId);
    if (!comment) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 답변');
    }
    if (comment.owner !== userId) {
      throw new AppError(errorNames.authorizationError, 403, '권한 없는 유저');
    }
    const filter = { _id: commentId };
    const update = { content };
    const result = await this.dependencies.commentModel.update(filter, update);
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
    const cockflow = await this.dependencies.cockflowModel.findById(cockflowId);
    if (!cockflow) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 칵플로우');
    }
    if (cockflow.owner !== userId) {
      throw new AppError(errorNames.authorizationError, 403, '권한 없음');
    }

    const comment = await this.dependencies.commentModel.findById(commentId);

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

    const result = await this.dependencies.commentModel.updateAdopted(
      commentId,
    );
    if (!result.acknowledged || !result.modifiedCount) {
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    }
    return;
  };

  public deleteComment = async (commentId: string, userId: number) => {
    const comment = await this.dependencies.commentModel.findById(commentId);
    if (!comment)
      throw new AppError(errorNames.inputError, 400, '해당하는 댓글 없음');
    if (comment.owner !== userId)
      throw new AppError(errorNames.authorizationError, 403, '권한 없음');

    await this.dependencies.commentModel.delete(commentId);
    return;
  };

  public addSubcomment = async (subcommentInfo: SubCommentInfo) => {
    const comment = await this.dependencies.commentModel.findById(
      subcommentInfo.parentCommentId,
    );
    if (!comment)
      throw new AppError(errorNames.inputError, 400, '해당하는 댓글 없음');
    await this.dependencies.commentModel.create(subcommentInfo);
    return;
  };
}

const commentDependencies = new CommentDependencies();

const commentService = new CommentService(commentDependencies);

export default commentService;
