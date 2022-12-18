import { UserInfo } from '../../services';
import { Document } from 'mongoose';
import { User } from 'types';

export interface IUserMongoModel {
  create(userInfo: UserInfo): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findById(userId: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  checkEmailDuplicate(email: string): Promise<boolean>;
  checkNicknameDuplicate(nickname: string): Promise<boolean>;
}

export interface IUserModel {
  Mongo: IUserMongoModel;
}

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  nickname: string;
  tel: string;
  birthday: Date;
  avatarUrl: string;
  isAdmin: boolean;
  isBartender: boolean;
  readonly userGetResDto: User;
}
