import 'dotenv/config';
import mongoDb from './src/mongodb';
import redisClient from './src/redis';
import server from './src/server';

const PORT = process.env.PORT as string;

function init() {
  server.listen(PORT);
  mongoDb.connect();
  redisClient.connect();
}

init();
