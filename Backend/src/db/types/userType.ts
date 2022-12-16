import { Document } from 'mongoose';
import { User } from 'types';

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

export interface UserInfo {
  name: string;
  email: string;
  password: string;
  nickname: string;
}
