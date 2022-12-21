import { SubCommentInfo } from './../../services/types/commentType';
import { CommentInfo } from 'Backend/src/services';
import { UpdateWriteOpResult, AnyExpression } from 'mongoose';

export interface IComment {
  owner: string;
  cockflowId: number;
  content: string;
  isSubComment?: boolean;
  parentCommentId?: string;
}

export interface ICommentModel {
  Mongo: ICommentMongoModel;
}

export interface ICommentMongoModel {
  create(cockflowInfo: CommentInfo | SubCommentInfo): Promise<IComment>;
  findByUserId(userId: string): Promise<IComment[]>;
  findById(commentId: string): Promise<IComment | null>;
  updateAdopted(commentId: string): Promise<UpdateWriteOpResult>;
  deleteById(commentId: string): Promise<AnyExpression>;
}
