import fs from 'fs';
import EventEmitter from 'events';
import { redisCache } from '../redis';
import errorEvents from './errorEvent';
import logger from '../winston';
import cocktailService from '../services/cocktailService';

const cachingEvents = new EventEmitter();

cachingEvents.on('rankingCachingRefresh', async () => {
  await redisCache.del('ranking');
  const cachingData = await cocktailService.getHomeCocktailAndUserList();
  const result = redisCache.set('ranking', JSON.stringify(cachingData));
  if (!result) {
    errorEvents.emit('eventErrorOccured', '랭킹 업데이트');
    return;
  }
  cachingEvents.emit('rankingCachingUpdate');
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
