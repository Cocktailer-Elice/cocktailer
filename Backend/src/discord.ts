import { Client, Events, GatewayIntentBits } from 'discord.js';
import logger from './winston';

const discordClient = new Client({ intents: [GatewayIntentBits.Guilds] });

discordClient.once(Events.ClientReady, () => {
  logger.info(`🤖 ${discordClient?.user?.tag} 작동 준비 완료!`);
});

export default discordClient;
