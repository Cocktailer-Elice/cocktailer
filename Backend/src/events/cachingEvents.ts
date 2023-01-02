import fs from 'fs';
import EventEmitter from 'events';
import { redisCache } from '../redis';
import errorEvents from './errorEvent';
import logger from '../winston';

const cachingEvents = new EventEmitter();

cachingEvents.on('newWeek', async () => {
  let retry = 2;
  let result = await redisCache.del('ranking');
  while (!result && retry--) {
    result = await redisCache.del('ranking');
  }
  if (!result) {
    errorEvents.emit('eventErrorOccured', '랭킹 업데이트');
  }
});

cachingEvents.on('rankingCachingUpdate', async () => {
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;
  fs.appendFile(
    'logs/ranking.log',
    `${timestamp}에 금주 랭킹 캐싱 완료됨\n\n`,
    (error) => {
      if (error) {
        logger.info(error.message);
        errorEvents.emit('eventErrorOccured', '랭킹 캐싱');
      }
    },
  );
});

export default cachingEvents;
