import {
  IUserMongoModel,
  IUserModel,
  FindOneFilter,
  UpdateOneFilter,
} from '../types';
import { UserInfo } from '../../services/types';
import { IUser } from '../types';
import User from '../schemas/userSchema';

export class UserMongoModel implements IUserMongoModel {
  public create = async (userInfo: UserInfo): Promise<IUser> => {
    const newUser = await User.create(userInfo);
    return newUser;
  };

  public findAll = async (): Promise<IUser[]> => {
    const projection = '-_id -__v';
    const users: IUser[] = await User.find({}, projection);
    return users;
  };

  public findById = async (userId: string): Promise<IUser | null> => {
    const filter = { id: userId };
    const projection = '-_id -__v';
    const user = await User.findOne(filter, projection);
    return user;
  };

  public findByFilter = async (
    filter: FindOneFilter,
  ): Promise<IUser | null> => {
    const foundUser = await User.findOne(filter);
    return foundUser;
  };

  public update = async (filter: FindOneFilter, update: UpdateOneFilter) => {
    const result = await User.updateOne(filter, update);
    return result;
  };

  public checkEmailDuplicate = async (email: string): Promise<boolean> => {
    const filter = { email };
    const result = await User.find(filter).countDocuments();
    return result ? true : false;
  };

  public checkNicknameDuplicate = async (
    nickname: string,
  ): Promise<boolean> => {
    const filter = { nickname };
    const result = await User.find(filter).countDocuments();
    return result ? true : false;
  };

  public checkTelDuplicate = async (tel: string): Promise<boolean> => {
    const filter = { tel };
    const result = await User.find(filter).countDocuments();
    return result ? true : false;
  };
}

export class UserModel implements IUserModel {
  Mongo = new UserMongoModel();
}

const userModel = new UserModel();

export { userModel };
