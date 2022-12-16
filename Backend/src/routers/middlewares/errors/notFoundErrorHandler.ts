import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { AppError } from './app-error-handler';
import { errorNames } from './error-names';

export const notFoundErrorHandler = (req: Req, res: Res, next: Next) => {
  next(
    new AppError(errorNames.resourceNotFoundError, 500, `존재하지 않는 API`),
  );
};
