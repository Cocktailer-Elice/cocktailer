import { UserInfo } from '../../services';
import { AnyExpression, Document, UpdateWriteOpResult } from 'mongoose';
import { User } from 'types';
import { Cookie } from 'Backend/src/routers/middlewares/types';

export interface IUserMongoModel {
  create(userInfo: UserInfo): Promise<IUser>;
  getPosts(userId: number): Promise<AnyExpression>;
  findById(userId: number): Promise<IUser | null>;
  findByFilter(filter: FindOneFilter): Promise<IUser | null>;
  update(
    filter: FindOneFilter,
    update: UpdateOneFilter,
  ): Promise<UpdateWriteOpResult>;
  softDelete(
    filter: FindOneFilter,
    update: UpdateOneFilter,
  ): Promise<UpdateWriteOpResult>;
  checkDuplicate(filter: FindOneFilter): Promise<boolean>;
}

export interface IUserModel {
  Mongo: IUserMongoModel;
}

export interface FindOneFilter {
  _id?: string;
  id?: number;
  name?: string;
  email?: string;
  tel?: string;
  nickname?: string;
  isBartender?: string;
}

export interface UpdateOneFilter {
  password?: string;
  avatarUrl?: string;
  deletedAt?: number;
  isBartender?: boolean | string;
  isAdmin?: boolean;
}

export interface IUser extends Document {
  id: number;
  name: string;
  email: string;
  password: string;
  nickname: string;
  tel: string;
  birthday: Date;
  avatarUrl: string;
  isAdmin: boolean;
  isBartender: boolean;
  deletedAt: null | number;
  points: number;
  readonly userGetResData: User;
  readonly tokenData: Cookie;
}
