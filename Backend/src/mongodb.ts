import mongoose, { Mongoose } from 'mongoose';
import logger from './winston';

const NODE_ENV = process.env.NODE_ENV;
const MONGO_URL = process.env.MONGO_URL;

const isDev = NODE_ENV === 'dev' ? true : false;

mongoose.set('strictQuery', false);
mongoose.set('debug', isDev);

const DB_URL: string = MONGO_URL || '❌ MongoDB 서버 연결 실패,,,';

class MongoDb {
  public readonly db: mongoose.Connection;

  constructor() {
    this.db = mongoose.createConnection(DB_URL);
  }

  public connect = () => {
    mongoose.connect(DB_URL);
    this.db.on('connected', () => {
      logger.info(`⭕ MongoDB 서버 연결 완료! URL: ${DB_URL}`);
    });

    this.db.on('error', () => logger.error(DB_URL));
  };
}

const mongoDb = new MongoDb();

export const db = mongoDb.db;

export default mongoDb;
