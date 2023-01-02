import EventEmitter from 'events';
import { logError, logEventError } from './utils';
import { errorAlarm } from './utils/discordWebHook';

const errorEvents = new EventEmitter();

errorEvents.on('AppErrorOccured', async (req, err) => {
  let retry = 2;
  let result = logError(req, err, true);
  while (!result && retry--) {
    result = logError(req, err, true);
  }
  errorAlarm(req, err);
});

errorEvents.on('uncaughtErrorOccured', async (req, err) => {
  let retry = 2;
  let result = logError(req, err, false);
  while (!result && retry--) {
    result = logError(req, err, false);
  }
});

errorEvents.on('eventErrorOccured', async (event: string) => {
  let retry = 2;
  const message = `${event} 이벤트 에러 발생. 에러 로그 확인 필요`;
  let result = logEventError(message);
  while (!result && retry--) {
    result = logEventError(message);
  }
});

export default errorEvents;
