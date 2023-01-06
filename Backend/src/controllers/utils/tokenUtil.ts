import { IUser } from '../../db';
import { sign } from 'jsonwebtoken';
import { Cookie, Token } from '../../routers/middlewares/types';

const ACCESS_KEY = process.env.ACCESS_KEY as string;
const ACCESS_EXPIRE = process.env.ACCESS_EXPIRE as string;
const ACCESS_EXPIRE_AUTO = process.env.ACCESS_EXPIRE_AUTO as string;
const COOKIE_EXPIRE = process.env.COOKIE_EXPIRE as string;

export const createToken = (user: IUser, isAutoLogin: boolean) => {
  const tokenData = user.tokenData;
  const secretKey = ACCESS_KEY;
  const expiresIn = isAutoLogin ? ACCESS_EXPIRE_AUTO : ACCESS_EXPIRE;
  const token = sign(tokenData, secretKey, { expiresIn });
  return token;
};

export const updateToken = (originalCookie: Cookie, avatarUrl: string) => {
  const tokenData = { ...originalCookie };
  (tokenData as Token).id = originalCookie.userId;
  tokenData.avatarUrl = `https://d3jq6qvyumldop.cloudfront.net/avatars/${avatarUrl}`;
  delete tokenData.userId;
  const secretKey = ACCESS_KEY;
  const { exp } = originalCookie;
  const expiresIn = (exp as number) - Math.floor(Date.now() / 1000);
  delete tokenData.exp;
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
  if (process.env.NODE_ENV === 'dev') {
    const cookie = isAutoLogin
      ? `Authorization=${token}/${userId}; HttpOnly; Max-Age=${cookieExpire}; path=/;`
      : `Authorization=${token}/${userId}; HttpOnly; path=/;`;
    return cookie;
  } else {
    const cookie = isAutoLogin
      ? `Authorization=${token}/${userId}; HttpOnly; Max-Age=${cookieExpire}; path=/; secure;`
      : `Authorization=${token}/${userId}; HttpOnly; path=/; secure;`;
    return cookie;
  }
};
