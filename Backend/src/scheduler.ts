import cachingEvents from './events/cachingEvents';
import cron from 'node-cron';
import devEvents from './events/devEvents';
import logger from './winston';

class Scheduler {
  private setDeleteCachingScheduler = () => {
    cron.schedule(
      '0 0 6 * * MON',
      () => {
        cachingEvents.emit('newWeek');
      },
      { timezone: 'Asia/Seoul' },
    );
  };

  private setScrumAlarmScheduler = () => {
    cron.schedule(
      '0 30 13 * * MON,WED,FRI',
      () => {
        devEvents.emit('scrumTimeArrive');
      },
      { timezone: 'Asia/Seoul' },
    );
  };

  public setSchedule = () => {
    this.setDeleteCachingScheduler();
    this.setScrumAlarmScheduler();
    logger.info('⏰ 스케줄링 세팅 완료');
  };
}

const scheduler = new Scheduler();

export default scheduler;
