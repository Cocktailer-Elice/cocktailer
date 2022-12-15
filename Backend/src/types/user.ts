import { Document } from 'mongoose';
import { UserGetResDto } from '@/types';

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  nickname: string;
  avatarUrl: string;
  isAdmin: boolean;
  isBartender: boolean;
  readonly userGetResDto: UserGetResDto;
}

export interface UserCookie {
  id: string;
  email: string;
  isAdmin: boolean;
  isBartender: boolean;
}
