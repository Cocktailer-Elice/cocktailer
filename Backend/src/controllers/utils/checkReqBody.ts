import { AppError, errorNames } from '../../routers/middlewares';

export const checkRequestBody = (...args: string[]) => {
  for (const arg of args) {
    if (!arg)
      throw new AppError(
        errorNames.inputError,
        400,
        '정상적인 경로로 접근해 주세요 :(',
      );
  }
};
