import { userModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';
import { IUser } from '../db/types';
import { compare, hash } from 'bcrypt';

class UserService {
  private readonly userModel = userModel.Mongo;

  public getMyPosts = async (userId: number) => {
    const myPosts = await this.userModel.getPosts(userId);

    return myPosts;
  };

  public findUserEmail = async (name: string, tel: string) => {
    const filter = { name, tel };
    const foundUser = await this.userModel.findByFilter(filter);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, '해당하는 이메일 없음');
    }
    const { email } = foundUser;
    const blurredEmail = `${email.slice(0, 5)}****@${email.split('@')[1]}`;
    return blurredEmail;
  };

  public verifyUser = async (name: string, email: string, tel: string) => {
    const filter = { name, email, tel };
    const foundUser = await this.userModel.findByFilter(filter);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, '해당하는 유저 없음');
    }
    return;
  };

  public validatePassword = async (email: string, password: string) => {
    const filter = { email };
    const user = (await this.userModel.findByFilter(filter)) as IUser;
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
    const user = (await this.userModel.findByFilter(filter)) as IUser;
    const isPasswordMatching = await compare(password, user.password);
    if (!isPasswordMatching) {
      throw new AppError(errorNames.inputError, 400, '비정상적인 접근');
    }

    const hashedPassword = await hash(newPassword, 12);
    const update = { password: hashedPassword };
    await this.userModel.update(filter, update);
    return;
  };

  public updateUserProfile = async (userId: number, avatarUrl: string) => {
    const filter = { id: userId };
    const update = { avatarUrl };
    await this.userModel.update(filter, update);
    return;
  };

  public softDeleteUser = async (userId: number) => {
    const filter = { id: userId };
    const update = {
      tel: null,
      email: null,
      nickname: null,
      deletedAt: Date.now(),
    };
    await this.userModel.softDelete(filter, update);
    return;
  };
}

export default UserService;
