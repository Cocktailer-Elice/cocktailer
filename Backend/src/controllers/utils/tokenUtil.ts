import { Token, TokenData } from '../../routers/middlewares/types/authType';
import { IUser } from '../../db';
import { sign } from 'jsonwebtoken';

const ACCESS_KEY = process.env.ACCESS_KEY;
const ACCESS_EXPIRE = process.env.ACCESS_EXPIRE;

export const createToken = (user: IUser): Token => {
  const tokenData: TokenData = {
    id: user.id,
    email: user.email,
    isAdmin: user.isAdmin,
    isBartender: user.isBartender,
  };
  const secretKey: string = ACCESS_KEY as string;
  const expiresIn: string = ACCESS_EXPIRE as string;

  return {
    expiresIn,
    token: sign(tokenData, secretKey, { expiresIn }),
  };
};

export const createCookie = (tokenData: Token): string => {
  const { token, expiresIn } = tokenData;
  // HTTPS 적용 후 secure 옵션도 설정할 것! secure;
  return `Authorization=${token}; HttpOnly; Max-Age=${expiresIn};`;
};
