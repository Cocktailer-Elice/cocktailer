import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import fs from 'fs';
import logger from './winston';

class AppError extends Error {
  status: number;

  constructor(name: string, httpCode?: number, description?: string) {
    super(description);

    this.name = name;
    this.status = httpCode || 500;
  }
}

const logError = (method: string, url: string, errorContent: string) => {
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;
  const errorLog = `[${timestamp}] ${method}:${url}\n${errorContent}\n\n`;

  fs.appendFile('error.log', errorLog, (err) => {
    if (err) {
      logger.info(err.message);
    }
  });
};

const errorHandler = (
  err: AppError | Error,
  req: Req,
  res: Res,
  next: Next,
): Res => {
  const method = req.method;
  const url = req.url;
  const errorStatck = err.stack?.split('\n').slice(0, 3).join('\n');
  const errorContent = `${req.url} ${req.method} ${errorStatck}`;
  logError(method, url, errorContent);

  if ('status' in err) {
    logger.warn(errorContent);
    let { status = 500, message } = err;
    if (!message) message = '원인 불명 에러. 서버 담당자 문의';
    return res.status(status as number).json({ message });
  }

  logger.error(errorContent);
  return res.status(500).json({ message: '원인 불명 에러. 서버 담당자 문의' });
};

export { AppError, errorHandler };
