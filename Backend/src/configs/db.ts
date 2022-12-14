import mongoose from 'mongoose';
import logger from './winston';

const isDev = process.env.NODE_ENV === 'dev' ? true : false;

mongoose.set('strictQuery', false);
mongoose.set('debug', isDev);

const DB_URL: string = process.env.MONGO_URL || '❌ MongoDB 서버 연결 실패,,,';

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('connected', () => {
  logger.info(`⭕ MongoDB 서버 연결 완료! URL: ${DB_URL}`);
});

db.on('error', () => logger.error(DB_URL));
