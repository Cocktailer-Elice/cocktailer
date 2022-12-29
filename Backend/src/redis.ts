import { createClient, RedisClientType } from 'redis';
import logger from './winston';

const { REDIS_USERNAME, REDIS_PW, REDIS_URL, REDIS_PORT } = process.env;
const url = `redis://${REDIS_USERNAME}:${REDIS_PW}@${REDIS_URL}:${REDIS_PORT}/0`;

class RedisClient {
  public readonly client: RedisClientType;

  constructor() {
    this.client = createClient({ url });
  }

  public connect = () => {
    this.client.connect();

    this.client.on('connect', () =>
      logger.info(`Redis 연결 성공! URL: ${url}`),
    );

    this.client.on('error', (err) =>
      logger.error(`Redis 연결 실패,,, 원인: ${err.name}`),
    );
  };
}

const redisClient = new RedisClient();

export const redisCache = redisClient.client;

export default redisClient;
