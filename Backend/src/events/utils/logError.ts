import { Request as Req } from 'express';
import fs from 'fs';
import logger from '../../winston';

export const logError = (req: Req, err: any, isAppError: boolean) => {
  const method = req.method;
  const url = req.url;
  const errorStatck = err.stack?.split('\n').slice(0, 3).join('\n');
  const errorContent = `${req.url} ${req.method} ${errorStatck}`;
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;
  const errorLog = `[${timestamp}] ${method}:${url}\n${errorContent}\n\n`;

  if (isAppError) {
    logger.warn(errorContent);
  } else {
    logger.error(errorContent);
  }

  fs.appendFile('logs/error.log', errorLog, (error) => {
    if (error) {
      logger.info(error.message);
      return false;
    }
  });
  return true;
};

export const logEventError = (message: string) => {
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;
  const errorLog = `[${timestamp}] \n${message}\n\n`;

  fs.appendFile('logs/eventError.log', errorLog, (error) => {
    if (error) {
      logger.info(error.message);
      return false;
    }
  });
  return true;
};
