import { IUserMongoModel, IUserModel } from './../types/userType';
import { UserInfo } from '../../services/types';
import { IUser } from '../types';
import User from '../schemas/userSchema';

export class Mongo implements IUserMongoModel {
  async create(userInfo: UserInfo): Promise<IUser> {
    const newUser = await User.create(userInfo);
    return newUser;
  }

  async findAll(): Promise<IUser[]> {
    const projection = '-_id -__v';
    const users: IUser[] = await User.find({}, projection);
    return users;
  }

  async findById(userId: string): Promise<IUser | null> {
    const filter = { id: userId };
    const projection = '-_id -__v';
    const user = await User.findOne(filter, projection);
    return user;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const filter = { email };
    const projection = '-_id -__v';
    const user = await User.findOne(filter, projection);
    return user;
  }

  async checkEmailDuplicate(email: string): Promise<boolean> {
    const filter = { email };
    const result = await User.find(filter).countDocuments();
    return result ? true : false;
  }

  async checkNicknameDuplicate(nickname: string): Promise<boolean> {
    const filter = { nickname };
    const result = await User.find(filter).countDocuments();
    return result ? true : false;
  }
}

export class UserModel implements IUserModel {
  Mongo = new Mongo();
}

const userModel = new UserModel();

export { userModel };
