import { IUser, UserInfo } from '../types';
import User from '../schemas/userSchema';

interface IUserModel {
  create(userInfo: UserInfo): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findById(userId: string): Promise<IUser | null>;
  checkEmailDuplicate(email: string): Promise<boolean>;
}

export class UserModel implements IUserModel {
  async create(userInfo: UserInfo): Promise<IUser> {
    const newUser = await User.create(userInfo);
    return newUser;
  }

  async findAll(): Promise<IUser[]> {
    const users: IUser[] = await User.find({}, '-_id -__v');
    return users;
  }

  async findById(userId: string): Promise<IUser | null> {
    const user = await User.findOne({ id: userId }, '-_id -__v');
    return user;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email }, '-_id -__v');
    return user;
  }

  async checkEmailDuplicate(email: string): Promise<boolean> {
    const result = await User.find({ email }).countDocuments();
    return result ? true : false;
  }

  async checkNicknameDuplicate(nickname: string): Promise<boolean> {
    const result = await User.find({ nickname }).countDocuments();
    return result ? true : false;
  }
}

const userModel = new UserModel();

export { IUserModel, userModel };
