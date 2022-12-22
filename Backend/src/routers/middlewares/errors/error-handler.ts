import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import logger from '../../../winston';
import { AppError } from './app-error-handler';

const errorHandler = (err: Error, req: Req, res: Res, next: Next) => {
  if (err instanceof AppError) {
    return next(err);
  }
  const errorContent = err.stack?.split('\n').slice(0, 3).join('\n');
  logger.error(`${req.url} ${req.method} ${errorContent}`);
  return res.status(500).json({ message: '원인 불명 에러. 서버 담당자 문의' });
};

export { errorHandler };
