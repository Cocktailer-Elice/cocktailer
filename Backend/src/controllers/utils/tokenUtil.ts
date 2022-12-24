import { IUser } from '../../db';
import { sign } from 'jsonwebtoken';
import { Cookie, TokenData } from 'Backend/src/routers/middlewares/types';

const ACCESS_KEY = process.env.ACCESS_KEY as string;
const ACCESS_EXPIRE = process.env.ACCESS_EXPIRE as string;

export const createToken = (user: IUser) => {
  const tokenData = user.userGetResDto;
  const secretKey = ACCESS_KEY;
  const expiresIn = ACCESS_EXPIRE;
  const token = sign(tokenData, secretKey, { expiresIn: 30 });
  console.log(expiresIn);
  return { expiresIn, token };
};

export const updateToken = (user: IUser, originalCookie: Cookie) => {
  const tokenData = user.userGetResDto;
  const secretKey = ACCESS_KEY;
  const { iat, exp } = originalCookie;
  const expiresIn = exp - iat;
  const token = sign(tokenData, secretKey, { expiresIn: 3600 });
  return { expiresIn, token };
};

export const createCookie = (tokenData: TokenData, userId: string) => {
  const { expiresIn, token } = tokenData;
  // HTTPS 적용 후 secure 옵션도 설정할 것! secure;
  return `Authorization=${token}/${userId}; HttpOnly; Max-Age=${604800}; path=/;`;
};
