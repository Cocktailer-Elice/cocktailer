import { IUserMongoModel } from 'Backend/src/db';

export interface IAuthDependencies {
  userModel: IUserMongoModel;
}

export interface UserInfo {
  name: string;
  email: string;
  password: string;
  nickname: string;
}
