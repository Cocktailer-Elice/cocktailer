import { Client, Events, GatewayIntentBits } from 'discord.js';
import logger from './winston';

const discordClient = new Client({ intents: [GatewayIntentBits.Guilds] });

discordClient.once(Events.ClientReady, () => {
  logger.info(`π€ ${discordClient?.user?.tag} μλ μ€λΉ μλ£!`);
});

export default discordClient;
