import { CommentInfo } from 'Backend/src/services';
import { UpdateWriteOpResult, AnyExpression } from 'mongoose';

export interface IComment {
  owner: string;
  cockflowId: number;
  title: string;
  content: string;
  comments: string[];
}

export interface ICommentModel {
  Mongo: ICommentMongoModel;
}

export interface ICommentMongoModel {
  create(cockflowInfo: CommentInfo): Promise<IComment>;
  findByUserId(userId: string): Promise<IComment[]>;
  findById(commentId: string): Promise<IComment | null>;
  updateAdopted(commentId: string): Promise<UpdateWriteOpResult>;
  updateLikes(commentId: string, value: number): Promise<UpdateWriteOpResult>;
  deleteById(commentId: string): Promise<AnyExpression>;
}
