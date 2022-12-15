import { Document } from 'mongoose';
import { User } from '../dtos';

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  nickname: string;
  avatarUrl: string;
  isAdmin: boolean;
  isBartender: boolean;
  readonly userGetResDto: User;
}

export interface UserCookie {
  id: string;
  email: string;
  isAdmin: boolean;
  isBartender: boolean;
}
