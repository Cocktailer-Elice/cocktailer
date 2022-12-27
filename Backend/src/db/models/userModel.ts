import {
  IUserMongoModel,
  IUserModel,
  FindOneFilter,
  UpdateOneFilter,
} from '../types';
import { UserInfo } from '../../services/types';
import { IUser } from '../types';
import User from '../schemas/userSchema';
import { userQueries } from '../queries/userQuery';

class UserMongoModel implements IUserMongoModel {
  public create = async (userInfo: UserInfo): Promise<IUser> => {
    const newUser = await User.create(userInfo);
    return newUser;
  };

  public getPosts = async (userId: number) => {
    const users: IUser[] = await User.aggregate(userQueries.findById(userId));
    return users;
  };

  public findById = async (userId: number): Promise<IUser | null> => {
    const filter = { id: userId };
    const projection = '-_id -__v';
    const user = await User.findOne(filter, projection);
    return user;
  };

  public findByFilter = async (
    filter: FindOneFilter,
  ): Promise<IUser | null> => {
    const user = await User.findOne(filter);
    return user;
  };

  public findByApplying = async (filter: FindOneFilter, projection: string) => {
    const users = await User.find(filter, projection);
    return users;
  };

  public update = async (filter: FindOneFilter, update: UpdateOneFilter) => {
    const result = await User.updateOne(filter, update);
    return result;
  };

  public delete = async (filter: FindOneFilter) => {
    const result = await User.deleteOne(filter);
    return result;
  };

  public checkDuplicate = async (filter: FindOneFilter): Promise<boolean> => {
    const result = await User.findOne(filter).countDocuments();
    return result ? true : false;
  };
}

const userMongoModel = new UserMongoModel();

class UserModel implements IUserModel {
  constructor(public Mongo: UserMongoModel) {}
}

const userModel = new UserModel(userMongoModel);

export { UserModel, userModel };
