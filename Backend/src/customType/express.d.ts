import { UserCookie } from '../types';

declare global {
  namespace Express {
    interface Request {
      user: UserCookie;
    }
  }
}
