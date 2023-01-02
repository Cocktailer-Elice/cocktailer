import EventEmitter from 'events';
import { scrumAlarm } from './utils/discordWebHook';

const devEvents = new EventEmitter();

devEvents.on('scrumStart', async () => {
  scrumAlarm();
});

export default devEvents;
