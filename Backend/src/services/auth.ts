import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IUser, IToken, TokenData, UserCookie } from '../types';
import { UserCreateDto, LoginDto } from '../dtos';
import { userModel } from '../db';
import { AppError, errorNames } from '../middlewares';

class AuthService {
  private readonly userModel = userModel;

  public async signup(userCreateDto: UserCreateDto): Promise<IUser | null> {
    const { email, password } = userCreateDto;

    const isEmailExist = await this.checkEmailDuplicate(email);
    if (isEmailExist) {
      throw new AppError(errorNames.inputError, 400, '이메일 중복');
    }

    const hashedPassword = await hash(password, 12);
    const newUser: IUser | null = await this.userModel.create({
      ...userCreateDto,
      password: hashedPassword,
    });

    return newUser;
  }

  public async login(
    userData: LoginDto,
  ): Promise<{ cookie: string; findUser: IUser }> {
    const { email, password } = userData;
    const findUser: IUser | null = await this.userModel.findOne(email);
    if (!findUser)
      throw new AppError(
        errorNames.inputError,
        400,
        `이메일에 해당하는 유저 없음`,
      );

    const isPasswordMatching: boolean = await compare(
      password,
      findUser.password,
    );
    if (!isPasswordMatching)
      throw new AppError(errorNames.inputError, 400, '비밀번호 불일치');

    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUser };
  }

  public async logout(userData: UserCookie): Promise<IUser> {
    const { id } = userData;
    const user: IUser | null = await this.userModel.findOne(id);
    if (!user)
      throw new AppError(errorNames.inputError, 40, `존재하지 않는 유저`);

    return user;
  }

  public createToken(user: IUser): IToken {
    const tokenData: TokenData = { id: user.id };
    const secretKey: string = process.env.ACCESS_KEY!;
    const expiresIn: number = +process.env.ACCESS_EXPIRE!;

    return {
      expiresIn,
      token: sign(tokenData, secretKey, { expiresIn }),
    };
  }

  public createCookie(tokenData: IToken): string {
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
