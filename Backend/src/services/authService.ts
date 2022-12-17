import { authContants } from './utils/constants';
import { hash, compare } from 'bcrypt';
import { IUser } from '../db/types';
import { UserCookie } from '../routers/middlewares/types';
import { UserCreateData, LoginReqData } from 'types';
import { userModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';

class AuthService {
  private readonly userModel = userModel;

  public async signup(userCreateData: UserCreateData): Promise<IUser> {
    const { email, password, alcohol } = userCreateData;

    await this.checkEmailDuplicate(email);

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
    return newUser;
  }

  public async login(userData: LoginReqData): Promise<IUser> {
    const { email, password } = userData;
    const foundUser: IUser | null = await this.userModel.findByEmail(email);
    if (!foundUser)
      throw new AppError(
        errorNames.inputError,
        400,
        `이메일 또는 비밀번호 재확인`,
      );

    await this.checkPassword(password, foundUser.password);

    return foundUser;
  }

  public async logout(userData: UserCookie): Promise<void> {
    const { userId } = userData;
    const foundUser: IUser | null = await this.userModel.findById(userId);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, `존재하지 않는 유저`);
    }
    return;
  }

  public async checkEmailDuplicate(email: string): Promise<void> {
    const result = await this.userModel.checkEmailDuplicate(email);
    if (result) {
      throw new AppError(
        errorNames.resourceDuplicationError,
        400,
        '이메일 중복',
      );
    }
    return;
  }

  private async createNickname(alcohol: string): Promise<string> {
    if (alcohol === 'Random') {
      const randomAlcoholSet = authContants.RANDOM_ALCOHOL_SET;
      const randomNumberCount = Math.floor(
        Math.random() * randomAlcoholSet.length,
      );
      alcohol = randomAlcoholSet[randomNumberCount];
    }

    const randomDecoSet = authContants.RANDOM_DECO_SET;
    const randomDecoCount = Math.floor(Math.random() * randomDecoSet.length);
    const decorator = randomDecoSet[randomDecoCount];

    let randomNumber = '';
    for (let digit = 0; digit <= 3; digit++) {
      const randomNumberDigit = Math.floor(Math.random() * 10);
      randomNumber += '' + randomNumberDigit;
    }

    const nickname = `${decorator} ${alcohol} #${+randomNumber}`;

    return nickname;
  }

  private async checkNicknameDuplicate(nickname: string): Promise<boolean> {
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

  private async checkPassword(
    password: string,
    hashedPassword: string,
  ): Promise<void> {
    const isPasswordMatching = await compare(password, hashedPassword);
    if (!isPasswordMatching)
      throw new AppError(
        errorNames.inputError,
        400,
        '이메일 또는 비밀번호 재확인',
      );
    return;
  }
}

export default AuthService;
