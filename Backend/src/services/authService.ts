import { createNickname } from './utils/createNickname';
import { createRandomNumber, sendAuthCodeMessage } from './utils';
import { hash, compare } from 'bcrypt';
import { UserCreateData, LoginReqData } from 'types';
import { userModel } from '../db/models/userModel';
import { AppError, errorNames } from '../routers/middlewares';
import redisCache from '../redis';

class AuthService {
  private readonly userModel = userModel.Mongo;

  public signup = async (userCreateData: UserCreateData) => {
    const { email, password, alcohol, tel } = userCreateData;

    await this.checkEmailDuplicate(email);
    await this.checkTelDuplicate(tel);

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
  };

  public login = async (userData: LoginReqData) => {
    const { email, password } = userData;
    const filter = { email };
    const foundUser = await this.userModel.findByFilter(filter);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, `이메일/비밀번호 재확인`);
    }
    // if (!foundUser.deletedAt) {
    //   throw new AppError(errorNames.authenticationError, 400, '탈퇴한 유저');
    // }
    if (!foundUser || !(await compare(password, foundUser.password))) {
      throw new AppError(errorNames.inputError, 400, `이메일/비밀번호 재확인`);
    }
    return foundUser;
  };

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
    return;
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

  public checkEmailDuplicate = async (email: string) => {
    const filter = { email };
    const result = await this.userModel.checkDuplicate(filter);
    if (result) {
      throw new AppError(errorNames.DuplicationError, 400, '이메일 중복');
    }
    return result;
  };

  public checkTelDuplicate = async (tel: string) => {
    const filter = { tel };
    const result = await this.userModel.checkDuplicate(filter);
    if (result) {
      throw new AppError(errorNames.DuplicationError, 400, '전화번호 중복');
    }
    return result;
  };

  private checkNicknameDuplicate = async (nickname: string) => {
    const filter = { nickname };
    const result = await this.userModel.checkDuplicate(filter);
    if (result) {
      throw new AppError(errorNames.DuplicationError, 400, '이메일 중복');
    }
    return result;
  };
}

export default AuthService;
