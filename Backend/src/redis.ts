import { createClient } from 'redis';
import logger from './winston';

const { REDIS_USERNAME, REDIS_PW, REDIS_URL, REDIS_PORT } = process.env;
const url = `redis://${REDIS_USERNAME}:${REDIS_PW}@${REDIS_URL}:${REDIS_PORT}/0`;

const client = createClient({
  url,
});

client.on('connect', () => logger.info(`Redis 연결 성공! URL: ${url}`));

client.on('error', (err) =>
  logger.error(`Redis 연결 실패,,, 원인: ${err.name}`),
);

export default client;

// GET
// router.get('/', (req, res, next) => {
//   await redisCli.get('username');
// });

// POST
// router.post('/set', (req, res, next) => {
//   await redisCli.set('username', 'inpa');
// });

// DELETE
// router.delete('/del', (req, res, next) => {
// exist : 키가 존재하는지
//   const n = await redisCli.exists('username'); // true: 1 , false: 0
//   if (n) await redisCli.del('username');
// });

// PUT
// router.put('/rename', (req, res, next) => {
// username이라는 키값이 있다면 그 값을 helloname으로 바꿈
//   redisCli.rename('username', 'helloname');
// });

// Hash
// await redisCli.hmset('friends', 'name', 'nyong', 'age', 30);
// await redisCli.hgetall('friends'); // { name : 'nyong', age : 30 }

// 트랜잭션
// await redisCli.set('another-key', 'another-value');

// const [setKeyReply, otherKeyValue] = await redisCli
//   .multi()
//   .set('key', 'value')
//   .get('another-key')
//   .exec(); // ['OK', 'another-value']

// 캐싱 기간 설정
// await redisCli.setex('username', 3600, 'inpa'); // setex 명령어로 키-밸류와 기간을 한번에 지정할 수도 있다.
