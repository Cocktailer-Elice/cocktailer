import { AppError } from '../../errorHandler';
import { errorNames } from '../../errorNames';

export const checkReqBody = (...args: string[]) => {
  for (const arg of args) {
    if (!arg) throw new AppError(errorNames.inputError, 400, '비정상적 접근');
  }
};
