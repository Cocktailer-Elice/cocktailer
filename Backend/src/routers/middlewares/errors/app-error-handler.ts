import logger from '../../../winston';
import { Request as Req, Response as Res, NextFunction as Next } from 'express';

class AppError extends Error {
  status: number;

  constructor(name: string, httpCode: number, description: string) {
    super(description);

    this.name = name;
    this.status = httpCode;
  }
}

const appErrorHandler = (
  err: AppError,
  req: Req,
  res: Res,
  next: Next,
): Res => {
  const errorContent = err.stack?.split('\n').slice(0, 3).join('\n');
  logger.warn(`${req.url} ${req.method} ${errorContent}`);
  const { status = 500, message } = err;

  return res.status(status).json({ message });
};

export { AppError, appErrorHandler };
