import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import logger from '../../configs/winston';
import { AppError } from './app-error-handler';

const errorHandler = (err: Error, req: Req, res: Res, next: Next) => {
  if (err instanceof AppError) {
    return next(err);
  }
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;
  logger.error('\x1b[41m%s\x1b[0m', err.name, timestamp, req.url, err.stack);
  return res.status(500).json({ message: err.message });
};

export { errorHandler };
