import { SubCommentInfo } from './../../services/types/commentType';
import {
  ICommentMongoModel,
  ICommentModel,
  CommentFindOneFilter,
  CommentUpdateOneFilter,
} from './../types/commentType';
import { CommentInfo } from '../../services';
import { IComment } from '../types';
import Comment from '../schemas/commentSchema';
import User from '../schemas/userSchema';
import { db } from '../../mongodb';
import { AppError } from '../../appError';
import { errorNames } from '../../errorNames';

class CommentMongoModel implements ICommentMongoModel {
  public async create(
    commentInfo: CommentInfo | SubCommentInfo,
  ): Promise<IComment> {
    const session = await db.startSession();
    try {
      session.startTransaction();
      const comment = await new Comment(commentInfo).save({
        session,
      });

      const updateUserFilter = { id: commentInfo.owner };
      await User.updateOne(updateUserFilter, { $inc: { points: 30 } }).session(
        session,
      );
      await session.commitTransaction();
      await session.endSession();
      return comment;
    } catch (err) {
      await session.abortTransaction();
      await session.endSession();
      throw new AppError(errorNames.databaseError);
    }
  }

  public async findByUserId(userId: number): Promise<IComment[]> {
    const filter = { owner: userId };
    const projection = '-_id -owner -updatedAt';
    const option = { sort: { createdAt: -1 } };
    const comments: IComment[] = await Comment.find(filter, projection, option);
    return comments;
  }

  public async findById(commentId: string): Promise<IComment | null> {
    const filter = { _id: commentId };
    const projection = '-createdAt -updatedAt';
    const comment = await Comment.findOne(filter, projection);
    return comment;
  }

  public update = async (
    filter: CommentFindOneFilter,
    update: CommentUpdateOneFilter,
  ) => {
    const result = await Comment.updateOne(filter, update);
    return result;
  };

  public updateAdopted = async (commentId: string) => {
    const filter = { _id: commentId };
    const update = { isAdopted: true };
    const result = await Comment.updateOne(filter, update);
    return result;
  };

  public async delete(commentId: string, isParentComment: boolean) {
    const session = await db.startSession();
    try {
      session.startTransaction();
      const commentDeleteFilter = { _id: commentId };
      await Comment.deleteOne(commentDeleteFilter).session(session);
      if (isParentComment) {
        const childCommentDeleteFilter = { parentCommentId: commentId };
        await Comment.deleteMany(childCommentDeleteFilter).session(session);
      }
      await session.commitTransaction();
      await session.endSession();
      return;
    } catch (err) {
      await session.abortTransaction();
      await session.endSession();
      throw new AppError(errorNames.databaseError);
    }
  }
}

const commentMongoModel = new CommentMongoModel();

class CommentModel implements ICommentModel {
  constructor(public Mongo: CommentMongoModel) {}
}

const commentModel = new CommentModel(commentMongoModel);

export { CommentModel, commentModel, CommentMongoModel };
