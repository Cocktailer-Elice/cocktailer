import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import fs from 'fs';
import logger from '../../../configs/winston';

function errorLogger(error: Error, req: Req, res: Res, next: Next) {
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;

  const method = req.method;
  const url = req.url;
  const errorContent = error.stack?.split('\n').slice(0, 2).join('\n');

  const errorLog = `[${timestamp}] ${method}:${url}\n${errorContent}\n\n`;

  fs.appendFile('error.log', errorLog, (err) => {
    if (err) {
      logger.info(err.message);
    }
  });

  next(error);
}

export { errorLogger };
