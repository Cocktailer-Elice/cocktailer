import { IUser } from '../../types';
import { UserCreateDto } from '../../dtos';
import User from '../schemas/user';

interface IUserModel {
  create(userCreateDto: UserCreateDto): Promise<IUser | null>;
  findAll(): Promise<IUser[]>;
  findOne(userId: string): Promise<IUser | null>;
  checkEmailDuplicate(email: string): Promise<number>;
}

export class UserModel implements IUserModel {
  async create(userCreateDto: UserCreateDto): Promise<IUser | null> {
    const newUser = await User.create(userCreateDto);
    return newUser;
  }

  async findAll(): Promise<IUser[]> {
    const users: IUser[] = await User.find({}, '-_id -__v');
    return users;
  }

  async findOne(userId: string): Promise<IUser | null> {
    const user = await User.findOne({ id: userId }, '-_id -__v');
    return user;
  }

  async checkEmailDuplicate(email: string): Promise<number> {
    const result = await User.find({ email }).countDocuments();
    return result;
  }
}

const userModel = new UserModel();

export { IUserModel, userModel };
