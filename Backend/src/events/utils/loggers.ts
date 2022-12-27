import fs from 'fs';
import logger from './winston';

export const logError = (method: string, url: string, errorContent: string) => {
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
