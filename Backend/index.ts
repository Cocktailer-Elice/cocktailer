import 'dotenv/config';
import './src/configs/db';
import server from './src/server';

const PORT = process.env.PORT || '8000';

function init() {
  server.listen(PORT);
}

init();
