import { IUserMongoModel } from 'Backend/src/db';

export interface IAdminDependencies {
  userModel: IUserMongoModel;
}
