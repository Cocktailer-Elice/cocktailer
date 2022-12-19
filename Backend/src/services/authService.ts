import { IUser } from './../db/types/userType';
import { createNickname } from './utils/createNickname';
import { createRandomNumber, sendAuthCodeMessage } from './utils';
import { hash, compare } from 'bcrypt';
import { UserCookie } from '../routers/middlewares/types';
import { UserCreateData, LoginReqData } from 'types';
import { userModel } from '../db/models/userModel';
import { AppError, errorNames } from '../routers/middlewares';
import redisCache from '../redis';

class AuthService {
  private readonly userModel = userModel.Mongo;

  public async signup(userCreateData: UserCreateData) {
    const { email, password, alcohol } = userCreateData;

    await this.checkEmailDuplicate(email);

    let nickname = await createNickname(alcohol);
    let isNicknameDuplicate = await this.checkNicknameDuplicate(nickname);
    while (isNicknameDuplicate) {
      nickname = await createNickname(alcohol);
      isNicknameDuplicate = await this.checkNicknameDuplicate(nickname);
    }
    const hashedPassword = await hash(password, 12);
    const newUser = await this.userModel.create({
      ...userCreateData,
      password: hashedPassword,
      nickname,
    });
    return newUser;
  }

  public async login(userData: LoginReqData) {
    const { email, password } = userData;
    const foundUser = await this.userModel.findByEmail(email);
    if (!foundUser || !(await compare(password, foundUser.password))) {
      throw new AppError(errorNames.inputError, 400, `이메일/비밀번호 재확인`);
    }
    return foundUser;
  }

  public async logout(userData: UserCookie) {
    const { userId } = userData;
    const foundUser = await this.userModel.findById(userId);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, `존재하지 않는 유저`);
    }
    return;
  }

  public async checkEmailDuplicate(email: string) {
    const result = await this.userModel.checkEmailDuplicate(email);
    if (result) {
      throw new AppError(errorNames.DuplicationError, 400, '이메일 중복');
    }
    return result;
  }

  public generateAuthCode = async (tel: string) => {
    if (await redisCache.exists(tel)) {
      redisCache.del(tel);
    }
    const code = createRandomNumber(6, false) as string;
    const response = await sendAuthCodeMessage(tel, code);

    if (response.status !== 202) {
      throw new AppError(errorNames.businessError, 500, '문자 전송 실패');
    }
    await redisCache.SETEX(tel, 300, code);
    return code;
  };

  public validateAuthCode = async (tel: string, code: string) => {
    const matchedCode = await redisCache.get(tel);
    if (!matchedCode) {
      throw new AppError(errorNames.authenticationError, 401, '인증 시간 초과');
    }
    if (matchedCode === code) {
      await redisCache.del(tel);
    }
    return;
  };

  public async validatePassword(email: string, password: string) {
    const user = (await this.userModel.findByEmail(email)) as IUser;
    const isPasswordMatching = await compare(password, user.password);
    if (!isPasswordMatching)
      throw new AppError(errorNames.inputError, 400, '비밀번호 재확인');
    return;
  }

  private async checkNicknameDuplicate(nickname: string) {
    const result = await this.userModel.checkNicknameDuplicate(nickname);
    if (result) {
      throw new AppError(errorNames.DuplicationError, 400, '이메일 중복');
    }
    return result;
  }
}

export default AuthService;
