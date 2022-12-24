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
import { db } from '../../mongodb';

class CommentMongoModel implements ICommentMongoModel {
  public async create(
    commentInfo: CommentInfo | SubCommentInfo,
  ): Promise<IComment> {
    const newComment = await Comment.create(commentInfo);
    return newComment;
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

  public async delete(commentId: string) {
    const session = await db.startSession();
    session.startTransaction();

    const commentDeleteFilter = { id: commentId };
    await Comment.deleteOne(commentDeleteFilter).session(session);

    const childCommentDeleteFilter = { parentCommentId: commentId };
    await Comment.deleteMany(childCommentDeleteFilter).session(session);
    await session.commitTransaction();
    session.endSession();
    return;
  }
}

const commentMongoModel = new CommentMongoModel();

class CommentModel implements ICommentModel {
  constructor(public Mongo: CommentMongoModel) {}
}

const commentModel = new CommentModel(commentMongoModel);

export { CommentModel, commentModel, CommentMongoModel };
