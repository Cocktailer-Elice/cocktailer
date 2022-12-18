import 'dotenv/config';
import './src/mongodb';
import server from './src/server';

const PORT = process.env.PORT as string;

function init() {
  server.listen(PORT);
}

init();
