import mongoose from 'mongoose';
import logger from './winston';

const NODE_ENV = process.env.NODE_ENV;
const MONGO_URL = process.env.MONGO_URL;

const isDev = NODE_ENV === 'dev' ? true : false;

mongoose.set('strictQuery', false);
mongoose.set('debug', isDev);

const DB_URL: string = MONGO_URL || '❌ MongoDB 서버 연결 실패,,,';

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('connected', () => {
  logger.info(`⭕ MongoDB 서버 연결 완료! URL: ${DB_URL}`);
});

db.on('error', () => logger.error(DB_URL));

export default db;
