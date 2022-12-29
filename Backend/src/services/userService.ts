import { compare, hash } from 'bcrypt';
import { userModel } from '../db';
import { AppError } from '../appError';
import { errorNames } from '../errorNames';
import { IUser } from '../db/types';
import { IUserDependencies } from './types/userType';
import { sendPasswordResetMail } from '../events/utils/sendMail';
import { createRandomPassword } from './utils/createRandomPassword';
import { redisCache } from '../redis';
import { createRandomNumber, sendAuthCodeMessage } from './utils';

class UserDependencies implements IUserDependencies {
  public userModel = userModel.Mongo;
}

class UserService {
  constructor(private dependencies: UserDependencies) {}

  public getMyPosts = async (userId: number) => {
    const myPosts = await this.dependencies.userModel.getPosts(userId);

    return myPosts;
  };

  public getMyLikes = async (userId: number) => {
    const myLikes = await this.dependencies.userModel.getLikes(userId);

    return myLikes;
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
    const filter = { name, email, tel, deletedAt: null };
    const foundUser = await this.dependencies.userModel.findByFilter(filter);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, '해당하는 유저 없음');
    }
    const temporaryPassword = createRandomPassword();
    const hashedPassword = await hash(temporaryPassword, 12);
    await this.dependencies.userModel.update(
      { email },
      { password: hashedPassword, isPasswordTemporary: true },
    );
    await sendPasswordResetMail(email, temporaryPassword);
    return;
  };

  public sendCode = async (tel: string) => {
    if (await redisCache.exists(tel)) {
      redisCache.del(tel);
    }
    const code = createRandomNumber(6, false) as string;
    const response = await sendAuthCodeMessage(tel, code);
    if (response.status !== 202) {
      throw new AppError(errorNames.businessError, 500, '문자 전송 실패');
    }
    await redisCache.SETEX(tel, 180, code);
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

  public updateUserState = async (userId: number) => {
    const filter = { id: userId };
    const update = { isApplyingBartender: true };
    await this.dependencies.userModel.update(filter, update);
    return;
  };

  public softDeleteUser = async (userId: number) => {
    const filter = { id: userId };
    const update = { nickname: '탈퇴한 유저', deletedAt: Date.now() };
    await this.dependencies.userModel.softDelete(filter, update);
    return;
  };
}

const userDependencies = new UserDependencies();

const userService = new UserService(userDependencies);

export default userService;
