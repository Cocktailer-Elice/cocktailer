import { IUser } from '../../db';
import { sign } from 'jsonwebtoken';
import { Cookie } from '../../routers/middlewares/types';

const ACCESS_KEY = process.env.ACCESS_KEY as string;
const ACCESS_EXPIRE = process.env.ACCESS_EXPIRE as string;
const ACCESS_EXPIRE_AUTO = process.env.ACCESS_EXPIRE_AUTO as string;
const COOKIE_EXPIRE = process.env.COOKIE_EXPIRE as string;

export const createToken = (user: IUser, isAutoLogin: boolean) => {
  const tokenData = user.tokenData;
  const secretKey = ACCESS_KEY;
  const expiresIn = isAutoLogin ? ACCESS_EXPIRE : ACCESS_EXPIRE_AUTO;
  const token = sign(tokenData, secretKey, { expiresIn });
  return token;
};

export const updateToken = (originalCookie: Cookie) => {
  const tokenData = originalCookie;
  const secretKey = ACCESS_KEY;
  const { exp } = originalCookie;
  const expiresIn = (exp as number) - Date.now() * 1000;
  if (tokenData.exp) {
    delete tokenData.exp;
    delete tokenData.iat;
  }
  const token = sign(tokenData, secretKey, { expiresIn });
  return token;
};

export const createCookie = (
  token: string,
  userId: string,
  isAutoLogin: boolean,
) => {
  const cookieExpire = COOKIE_EXPIRE;
  // HTTPS 적용 후 secure 옵션도 설정할 것! secure;
  const cookie = isAutoLogin
    ? `Authorization=${token}/${userId}; HttpOnly; Max-Age=${cookieExpire}; path=/;`
    : `Authorization=${token}/${userId}; HttpOnly; path=/;`;
  return cookie;
};
