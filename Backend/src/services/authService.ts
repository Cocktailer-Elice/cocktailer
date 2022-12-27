import { createNickname } from './utils/createNickname';
import { createRandomNumber, sendAuthCodeMessage } from './utils';
import { hash, compare } from 'bcrypt';
import { UserCreateData, LoginReqData } from 'types';
import { userModel } from '../db/models/userModel';
import { AppError } from '../appError';
import { errorNames } from '../errorNames';
import { redisCache } from '../redis';
import { IAuthDependencies } from './types';

class AuthDependencies implements IAuthDependencies {
  public userModel = userModel.Mongo;
}

class AuthService {
  constructor(private dependencies: AuthDependencies) {}

  public signup = async (userCreateData: UserCreateData) => {
    const { email, password, alcohol, tel } = userCreateData;
    // const isTelVerifed = await redisCache.GET(`${tel}_validated`);
    // if (isTelVerifed !== '1') {
    //   throw new AppError(
    //     errorNames.authenticationError,
    //     401,
    //     '인증 후 1시간 초과',
    //   );
    // }

    await this.checkEmailDuplicate(email);
    await this.checkTelDuplicate(tel);

    let nickname = await createNickname(alcohol);
    let isNicknameDuplicate = await this.checkNicknameDuplicate(nickname);
    while (isNicknameDuplicate) {
      nickname = await createNickname(alcohol);
      isNicknameDuplicate = await this.checkNicknameDuplicate(nickname);
    }
    const hashedPassword = await hash(password, 12);

    const newUser = await this.dependencies.userModel.create({
      ...userCreateData,
      password: hashedPassword,
      nickname,
    });
    return newUser;
  };

  public login = async (userData: LoginReqData) => {
    const { email, password } = userData;
    const filter = { email };
    const user = await this.dependencies.userModel.findByFilter(filter);
    if (!user) {
      throw new AppError(errorNames.inputError, 400, `이메일/비밀번호 재확인`);
    }
    if (user.deletedAt) {
      throw new AppError(errorNames.authenticationError, 401, '탈퇴한 유저');
    }
    if (!user || !(await compare(password, user.password))) {
      throw new AppError(errorNames.inputError, 400, `이메일/비밀번호 재확인`);
    }
    return user;
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
    await redisCache.SETEX(tel, 180, code);
    return;
  };

  public validateAuthCode = async (tel: string, code: string) => {
    const matchedCode = await redisCache.get(tel);
    if (!matchedCode) {
      throw new AppError(errorNames.authenticationError, 401, '인증 시간 초과');
    }
    if (matchedCode === code) {
      await redisCache.del(tel);
      await redisCache.SETEX(`${tel}_validated`, 3600, '1');
    }
    return;
  };

  public checkEmailDuplicate = async (email: string) => {
    const filter = { email };
    const result = await this.dependencies.userModel.checkDuplicate(filter);
    if (result) {
      throw new AppError(errorNames.DuplicationError, 400, '이메일 중복');
    }
    return result;
  };

  public checkTelDuplicate = async (tel: string) => {
    const filter = { tel, deletedAt: null };
    const result = await this.dependencies.userModel.checkDuplicate(filter);
    if (result) {
      throw new AppError(errorNames.DuplicationError, 400, '전화번호 중복');
    }
    return result;
  };

  private checkNicknameDuplicate = async (nickname: string) => {
    const filter = { nickname, deletedAt: null };
    const result = await this.dependencies.userModel.checkDuplicate(filter);
    if (result) {
      throw new AppError(errorNames.DuplicationError, 400, '이메일 중복');
    }
    return result;
  };
}

const authDependencies = new AuthDependencies();

const authService = new AuthService(authDependencies);

export default authService;
