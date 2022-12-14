import { Document } from 'mongoose';

export interface IUser extends Document {
  id: number;
  name: string;
  email: string;
  password: string;
  profile: string;
  nickname: string;
  certified: boolean;
}

export interface UserCreateDto {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}
