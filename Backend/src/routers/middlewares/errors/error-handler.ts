import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import logger from '../../../winston';
import { AppError } from './app-error-handler';

const errorHandler = (err: Error, req: Req, res: Res, next: Next) => {
  if (err instanceof AppError) {
    return next(err);
  }
  logger.error(`${req.url} ${req.method} ${err.stack}`);
  return res.status(500).json({ message: '서버 에러' });
};

export { errorHandler };
