import EventEmitter from 'events';
import loggingEvents from './errorEvent';
import {
  sendWelcomeMail,
  sendPasswordResetMail,
  sendFarewellMail,
} from './utils';

const mailingEvents = new EventEmitter();

mailingEvents.on('newUser', async (email: string) => {
  let retry = 2;
  let result = await sendWelcomeMail(email);
  while (!result && retry--) {
    result = await sendWelcomeMail(email);
  }
  if (!result) {
    loggingEvents.emit('eventErrorOccured');
  }
});

mailingEvents.on(
  'temporaryPasswordIssued',
  async (email: string, temporaryPassword: string) => {
    let retry = 2;
    let result = await sendPasswordResetMail(email, temporaryPassword);
    while (!result && retry--) {
      result = await sendPasswordResetMail(email, temporaryPassword);
    }
    if (!result) {
      loggingEvents.emit('eventErrorOccured');
    }
  },
);

mailingEvents.on('userSeceded', async (name: string, email: string) => {
  let retry = 2;
  let result = await sendFarewellMail(name, email);
  while (!result && retry--) {
    result = await sendFarewellMail(name, email);
  }
  if (!result) {
    loggingEvents.emit('eventErrorOccured');
  }
});

export default mailingEvents;
