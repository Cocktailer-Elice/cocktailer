import cachingEvents from './events/cachingEvents';
import cron from 'node-cron';
// import devEvents from './events/devEvents';
import logger from './winston';

class Scheduler {
  private setDeleteCachingScheduler = () => {
    // 1시간 마다 캐싱하는 로직
    cron.schedule(
      '0 0 * * * *',
      () => {
        cachingEvents.emit('rankingCachingRefresh');
      },
      { timezone: 'Asia/Seoul' },
    );
    // 30초 마다 캐싱하는 로직
    // cron.schedule(
    //   '0,30 * * * * *',
    //   () => {
    //     cachingEvents.emit('rankingCachingRefresh');
    //   },
    //   { timezone: 'Asia/Seoul' },
    // );
  };

  // private setScrumAlarmScheduler = () => {
  //   cron.schedule(
  //     '0 30 13 * * MON,WED,FRI',
  //     () => {
  //       devEvents.emit('scrumTimeArrive');
  //     },
  //     { timezone: 'Asia/Seoul' },
  //   );
  // };

  public setSchedule = () => {
    this.setDeleteCachingScheduler();
    // this.setScrumAlarmScheduler();
    logger.info('⏰ 스케줄링 세팅 완료');
  };
}

const scheduler = new Scheduler();

export default scheduler;
