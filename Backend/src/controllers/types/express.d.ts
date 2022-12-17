import { UserCookie } from '../../routers/middlewares';

declare global {
  namespace Express {
    interface Request {
      user: UserCookie;
    }
  }
}
