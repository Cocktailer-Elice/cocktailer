import { SubCommentInfo } from './../../services/types/commentType';
import { CommentInfo } from 'Backend/src/services';
import { UpdateWriteOpResult, AnyExpression } from 'mongoose';

export interface IComment {
  owner: number;
  cockflowId: number;
  content: string;
  isAdopted?: boolean;
  isSubComment?: boolean;
  parentCommentId?: string;
}

export interface ICommentModel {
  Mongo: ICommentMongoModel;
}

export interface CommentFindOneFilter {
  _id: string;
}

export interface CommentUpdateOneFilter {
  content: string;
}

export interface ICommentMongoModel {
  create(cockflowInfo: CommentInfo | SubCommentInfo): Promise<IComment>;
  findByUserId(userId: string): Promise<IComment[]>;
  findById(commentId: string): Promise<IComment | null>;
  update(
    filter: CommentFindOneFilter,
    update: CommentUpdateOneFilter,
  ): Promise<UpdateWriteOpResult>;
  updateAdopted(commentId: string): Promise<UpdateWriteOpResult>;
  delete(commentId: string): Promise<AnyExpression>;
}
