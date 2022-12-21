import 'dotenv/config';
import './src/mongodb';
import './src/redis';
import client from './src/redis';
import server from './src/server';

const PORT = process.env.PORT as string;

function init() {
  server.listen(PORT);
  client.connect();
}

init();
