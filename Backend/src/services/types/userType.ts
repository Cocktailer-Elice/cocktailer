import { IUserMongoModel } from 'Backend/src/db';

export interface IUserDependencies {
  userModel: IUserMongoModel;
}
