import { SubCommentInfo } from './../../services/types/commentType';
import { ICommentMongoModel, ICommentModel } from './../types/commentType';
import { CommentInfo } from '../../services';
import { IComment } from '../types';
import Comment from '../schemas/commentSchema';

class MongoModel implements ICommentMongoModel {
  public async create(
    commentInfo: CommentInfo | SubCommentInfo,
  ): Promise<IComment> {
    const newcomment = await Comment.create(commentInfo);
    return newcomment;
  }

  public async findByUserId(userId: string): Promise<IComment[]> {
    const filter = { owner: userId };
    const projection = '-_id -__v -updatedAt';
    const option = { sort: { createdAt: -1 } };
    const posts: IComment[] = await Comment.find(filter, projection, option);
    return posts;
  }

  public async findById(commentId: string): Promise<IComment | null> {
    const filter = { _id: commentId };
    const projection = '-createdAt -updatedAt';
    const comment = await Comment.findOne(filter, projection);
    return comment;
  }

  public updateAdopted = async (commentId: string) => {
    const filter = { _id: commentId };
    const update = { adopted: true };
    const result = await Comment.updateOne(filter, update);
    return result;
  };

  public updateLikes = async (commentId: string, value: number) => {
    const filter = { _id: commentId };
    const update = { $inc: { likes: value } };
    const result = await Comment.updateOne(filter, update);
    return result;
  };

  public async deleteById(commentId: string) {
    const filter = { id: commentId };
    const result = await Comment.deleteOne(filter);
    return result;
  }
}

export class CommentModel implements ICommentModel {
  Mongo = new MongoModel();
}

const commentModel = new CommentModel();

export { ICommentModel, commentModel };
