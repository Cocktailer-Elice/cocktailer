import { AppError } from '../../appError';
import { errorNames } from '../../errorNames';

export const checkReqBody = (...args: string[]) => {
  for (const arg of args) {
    if (arg === undefined)
      throw new AppError(errorNames.inputError, 400, '비정상적 접근');
  }
};
