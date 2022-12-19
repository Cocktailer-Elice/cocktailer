import { AppError, errorNames } from '../../routers/middlewares';

export const checkReqBody = (...args: string[]) => {
  for (const arg of args) {
    if (!arg) throw new AppError(errorNames.inputError, 400, '비정상적 접근');
  }
};
