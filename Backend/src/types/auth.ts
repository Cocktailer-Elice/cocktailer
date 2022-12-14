import { UserCookie } from './user';

export interface TokenData {
  id: string;
}

export interface IToken {
  token: string;
  expiresIn: number;
}

export interface RequestWithCookie extends Request {
  user: UserCookie;
}
