import { authContants } from './utils/constants';
import { hash, compare } from 'bcrypt';
import { UserCookie } from '../routers/middlewares/types';
import { UserCreateData, LoginReqData } from 'types';
import { userModel } from '../db/models/userModel';
import { AppError, errorNames } from '../routers/middlewares';
import redisCache from '../redis';
import { makeSignature } from './utils';
import fetch from 'node-fetch';

class AuthService {
  private readonly userModel = userModel.Mongo;

  public async signup(userCreateData: UserCreateData) {
    const { email, password, alcohol } = userCreateData;

    await this.checkEmailDuplicate(email);

    let nickname = await this.createNickname(alcohol);
    let isNicknameDuplicate = await this.checkNicknameDuplicate(nickname);
    while (isNicknameDuplicate) {
      nickname = await this.createNickname(alcohol);
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
    if (!foundUser)
      throw new AppError(errorNames.inputError, 400, `이메일/비밀번호 재확인`);

    await this.checkPassword(password, foundUser.password);

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
    const code = Math.floor(Math.random() * 1000000) + '';
    await this.sendAuthCodeMessage(tel, code);
    await redisCache.SETEX(tel, 300, code);
    return code;
  };

  public validateAuthCode = async (tel: string, code: string) => {
    const matchedCode = await redisCache.get(tel);
    if (!matchedCode) {
      throw new AppError(errorNames.authenticationError, 400, '인증 시간 초과');
    }
    if (matchedCode === code) {
      await redisCache.del(tel);
    }
    return;
  };

  private sendAuthCodeMessage = async (tel: string, code: string) => {
    const { SENS_ID, SENS_ACCESS_KEY, SENS_SECRET_KEY, SENS_FROM } =
      process.env;
    const timestamp = Date.now() + '';
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${SENS_ID}/messages`;
    const signature = makeSignature(
      timestamp,
      SENS_ID as string,
      SENS_ACCESS_KEY as string,
      SENS_SECRET_KEY as string,
    );
    const data = JSON.stringify({
      type: 'SMS',
      contentType: 'COMM',
      countryCode: '82',
      from: SENS_FROM,
      to: tel,
      content: `${code} <- 저쪽 신사/숙녀분께서 보내신 칵테일러 인증번호 입니다.`,
      messages: [
        {
          to: tel,
        },
      ],
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-ncp-apigw-timestamp': timestamp,
        'x-ncp-iam-access-key': SENS_ACCESS_KEY as string,
        'x-ncp-apigw-signature-v2': signature,
      },
      body: data,
    });

    if (response.status === 202) {
      return;
    }
    throw new AppError(errorNames.businessError, 500, '문자 전송 실패');
  };

  private async createNickname(alcohol: string) {
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

  private async checkNicknameDuplicate(nickname: string) {
    const result = await this.userModel.checkNicknameDuplicate(nickname);
    if (result) {
      throw new AppError(errorNames.DuplicationError, 400, '이메일 중복');
    }
    return result;
  }

  private async checkPassword(password: string, hashedPassword: string) {
    const isPasswordMatching = await compare(password, hashedPassword);
    if (!isPasswordMatching)
      throw new AppError(errorNames.inputError, 400, '이메일/비밀번호 재확인');
    return;
  }
}

export default AuthService;
