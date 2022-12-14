import { Document } from 'mongoose';

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  profile: string;
  nickname: string;
  certified: boolean;
}

export interface UserCookie {
  id: string;
  email: string;
}
