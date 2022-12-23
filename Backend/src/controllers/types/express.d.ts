import { Cookie } from '../../routers/middlewares';

declare global {
  namespace Express {
    interface Request {
      user: Cookie;
    }
  }
}
