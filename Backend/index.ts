import 'dotenv/config';
// import discordClient from './src/discord';
import mongoDb from './src/mongodb';
import redisClient from './src/redis';
import server from './src/server';
import scheduler from './src/scheduler';

const PORT = process.env.PORT as string;
// const discordToken = process.env.DISCORD_TOKEN as string;

function init() {
  server.listen(PORT);
  mongoDb.connect();
  redisClient.connect();
  // discordClient.login(discordToken);
  scheduler.setSchedule();
}

init();
