// import EventEmitter from 'events';
// import { IUser } from '../db';
// import { sendWelcomeMail } from './utils';

// const mailingEvents = new EventEmitter();

// mailingEvents.on('newUser', async (email: string) => {
//   let retry = 2;
//   let result = await sendWelcomeMail(email);
//   while (!result && retry--) {
//     result = await sendWelcomeMail(email);
//   }
// });
