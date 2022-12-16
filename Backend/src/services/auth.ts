import { tokenConfig } from './../configs/env';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IUser, IToken, TokenData, UserCookie } from '../types';
import { UserCreateData, LoginReqData } from 'types';
import { userModel } from '../db';
import { AppError, errorNames } from '../middlewares';

class AuthService {
  private readonly userModel = userModel;

  public async signup(
    userCreateData: UserCreateData,
  ): Promise<{ cookie: string; newUser: IUser }> {
    const { email, password, alcohol } = userCreateData;

    const isEmailDuplicate = await this.checkEmailDuplicate(email);
    if (isEmailDuplicate) {
      throw new AppError(errorNames.inputError, 400, '이메일 중복');
    }

    let nickname = await this.createNickname(alcohol);
    let isNicknameDuplicate = await this.checkNicknameDuplicate(nickname);
    while (isNicknameDuplicate) {
      nickname = await this.createNickname(alcohol);
      isNicknameDuplicate = await this.checkNicknameDuplicate(nickname);
    }
    const hashedPassword = await hash(password, 12);
    const newUser: IUser = await this.userModel.create({
      ...userCreateData,
      password: hashedPassword,
      nickname,
    });

    const tokenData = this.createToken(newUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, newUser };
  }

  public async login(
    userData: LoginReqData,
  ): Promise<{ cookie: string; foundUser: IUser }> {
    const { email, password } = userData;
    const foundUser: IUser | null = await this.userModel.findByEmail(email);
    if (!foundUser)
      throw new AppError(
        errorNames.inputError,
        400,
        `이메일 또는 비밀번호 재확인`,
      );

    const isPasswordMatching: boolean = await compare(
      password,
      foundUser.password,
    );
    if (!isPasswordMatching)
      throw new AppError(
        errorNames.inputError,
        400,
        '이메일 또는 비밀번호 재확인',
      );

    const tokenData = this.createToken(foundUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, foundUser };
  }

  public async logout(userData: UserCookie): Promise<void> {
    const { id } = userData;
    const foundUser: IUser | null = await this.userModel.findById(id);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, `존재하지 않는 유저`);
    }
    return;
  }

  private async checkEmailDuplicate(email: string): Promise<number> {
    const result = await this.userModel.checkEmailDuplicate(email);
    if (result) {
      throw new AppError(
        errorNames.resourceDuplicationError,
        400,
        '이메일 중복',
      );
    }
    return result;
  }

  private async createNickname(alcohol: string): Promise<string> {
    if (alcohol === 'Random') {
      const randomSet = ['Gin', 'Vodka', 'Rum', 'Whiskey', 'Tequila', 'Brandy'];
      const randomCount = Math.floor(Math.random() * randomSet.length);
      alcohol = randomSet[randomCount];
    }

    let randomNumber = '';
    for (let digit = 0; digit <= 3; digit++) {
      const randomNumberDigit = Math.floor(Math.random() * 10);
      randomNumber += '' + randomNumberDigit;
    }

    const nickname = `${alcohol}#${+randomNumber}`;

    return nickname;
  }

  private async checkNicknameDuplicate(nickname: string): Promise<number> {
    const result = await this.userModel.checkNicknameDuplicate(nickname);
    if (result) {
      throw new AppError(
        errorNames.resourceDuplicationError,
        400,
        '이메일 중복',
      );
    }
    return result;
  }

  private createToken(user: IUser): IToken {
    const tokenData: TokenData = {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      isBartender: user.isBartender,
    };
    const secretKey: string = tokenConfig.ACCESS_KEY as string;
    const expiresIn: string = tokenConfig.ACCESS_EXPIRE as string;

    return {
      expiresIn,
      token: sign(tokenData, secretKey, { expiresIn }),
    };
  }

  private createCookie(tokenData: IToken): string {
    const { token, expiresIn } = tokenData;
    return `Authorization=${token}; HttpOnly; Max-Age=${expiresIn};`;
  }
}

export default AuthService;
