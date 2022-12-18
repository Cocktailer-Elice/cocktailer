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
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;

  logger.error(
    `${err.name} ${timestamp} ${req.url} ${req.method} ${err.stack}`,
  );
  const {
    status = 500,
    message = '알 수 없는 오류가 발생했어요 :( 잠시 후에 다시 시도해 주세요!',
  } = err;

  return res.status(status).json(message);
};

export { AppError, appErrorHandler };
