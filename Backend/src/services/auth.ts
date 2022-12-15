import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IUser, Token, TokenData, UserCookie } from '../types';
import { UserCreateData, LoginReqDto } from '../dtos';
import { userModel } from '../db';
import { AppError, errorNames } from '../middlewares';

class AuthService {
  private readonly userModel = userModel;

  public async signup(
    userCreateDto: UserCreateData,
  ): Promise<{ cookie: string; newUser: IUser }> {
    const { email, password, alchol } = userCreateDto;

    const isEmailDuplicate = await this.checkEmailDuplicate(email);
    if (isEmailDuplicate) {
      throw new AppError(errorNames.inputError, 400, '이메일 중복');
    }

    const hashedPassword = await hash(password, 12);
    const newUser: IUser = await this.userModel.create({
      ...userCreateDto,
      password: hashedPassword,
    });

    const tokenData = this.createToken(newUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, newUser };
  }

  public async login(
    userData: LoginReqDto,
  ): Promise<{ cookie: string; foundUser: IUser }> {
    const { email, password } = userData;
    const foundUser: IUser | null = await this.userModel.findOne(email);
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

  public async logout(userData: UserCookie): Promise<IUser> {
    const { id } = userData;
    const user: IUser | null = await this.userModel.findOne(id);
    if (!user)
      throw new AppError(errorNames.inputError, 40, `존재하지 않는 유저`);

    return user;
  }

  public createToken(user: IUser): Token {
    const tokenData: TokenData = {
      id: user.id,
      isAdmin: user.isAdmin,
    };
    const secretKey: string = process.env.ACCESS_KEY as string;
    const expiresIn: number = +process.env.ACCESS_EXPIRE!;

    return {
      expiresIn,
      token: sign(tokenData, secretKey, { expiresIn }),
    };
  }

  public createCookie(tokenData: Token): string {
    const { token, expiresIn } = tokenData;
    return `Authorization=${token}; HttpOnly; Max-Age=${expiresIn};`;
  }

  private async checkEmailDuplicate(email: string): Promise<number> {
    const result = await this.userModel.checkEmailDuplicate(email);
    if (result) {
      throw new AppError(errorNames.inputError, 400, '이메일 중복');
    }
    return result;
  }
}

export default AuthService;
