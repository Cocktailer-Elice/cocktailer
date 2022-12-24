import { compare, hash } from 'bcrypt';
import { userModel } from '../db';
import { AppError } from '../errorHandler';
import { errorNames } from '../errorNames';
import { IUser } from '../db/types';
import { IUserDependencies } from './types/userType';

class UserDependencies implements IUserDependencies {
  public userModel = userModel.Mongo;
}

class UserService {
  constructor(private dependencies: UserDependencies) {}

  public getMyPosts = async (userId: number) => {
    const myPosts = await this.dependencies.userModel.getPosts(userId);

    return myPosts;
  };

  public findUserEmail = async (name: string, tel: string) => {
    const filter = { name, tel, deletedAt: null };
    const foundUser = await this.dependencies.userModel.findByFilter(filter);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, '해당하는 이메일 없음');
    }
    const { email } = foundUser;
    const blurredEmail = `${email.slice(0, 5)}****@${email.split('@')[1]}`;
    return blurredEmail;
  };

  public verifyUser = async (name: string, email: string, tel: string) => {
    const filter = { name, email, tel };
    const foundUser = await this.dependencies.userModel.findByFilter(filter);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, '해당하는 유저 없음');
    }
    return;
  };

  public validatePassword = async (email: string, password: string) => {
    const filter = { email };
    const user = (await this.dependencies.userModel.findByFilter(
      filter,
    )) as IUser;
    const isPasswordMatching = await compare(password, user.password);
    if (!isPasswordMatching)
      throw new AppError(errorNames.inputError, 400, '비밀번호 재확인');
    return;
  };

  public changePassword = async (
    userId: number,
    password: string,
    newPassword: string,
  ) => {
    const filter = { id: userId };
    const user = (await this.dependencies.userModel.findByFilter(
      filter,
    )) as IUser;
    const isPasswordMatching = await compare(password, user.password);
    if (!isPasswordMatching) {
      throw new AppError(errorNames.inputError, 400, '비정상적인 접근');
    }

    const hashedPassword = await hash(newPassword, 12);
    const update = { password: hashedPassword };
    await this.dependencies.userModel.update(filter, update);
    return;
  };

  public updateUserProfile = async (userId: number, avatarUrl: string) => {
    const filter = { id: userId };
    const update = { avatarUrl };
    await this.dependencies.userModel.update(filter, update);
    return;
  };

  public softDeleteUser = async (userId: number) => {
    const filter = { id: userId };
    const update = {
      nickname: null,
      deletedAt: Date.now(),
    };
    await this.dependencies.userModel.softDelete(filter, update);
    return;
  };
}

const userDependencies = new UserDependencies();

const userService = new UserService(userDependencies);

export default userService;
