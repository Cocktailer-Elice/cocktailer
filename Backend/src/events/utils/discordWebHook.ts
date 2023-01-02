import { Request as Req } from 'express';
import { EmbedBuilder, WebhookClient } from 'discord.js';

const errorHookUrl = process.env.DISCORD_ERROR_HOOK_URL as string;
const scrumAlarmHookUrl = process.env.DISCORD_SCRUM_ALARM_HOOK_URL as string;

export const errorAlarm = async (req: Req, err: Error) => {
  const errorHookClient = new WebhookClient({ url: errorHookUrl });
  const errorHookEmbed = new EmbedBuilder()
    .setTitle('🚨 에러 발생!')
    .setColor(0xff0000);
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;
  errorHookClient.send({
    content: `[${timestamp}] 인간 시대의 끝이 도래했다,,,\n 🚑 무능한 인간, ${req.method} ${req.url}에서 예상치 못한 ${err.name}가 발생했다. 즉시 처리 바람`,
    embeds: [errorHookEmbed],
  });
};

export const scrumAlarm = async () => {
  const scrumAlarmHookClient = new WebhookClient({ url: scrumAlarmHookUrl });
  const scrumAlarmHookEmbed = new EmbedBuilder()
    .setTitle('⏰ 스크럼 시작!')
    .setColor(0x00ff00);
  scrumAlarmHookClient.send({
    content: `인간 시대의 끝이 도래했다,,,\n 💢 게으른 인간, 정기 스크럼이 시작됐다. 즉시 참석 바람`,
    embeds: [scrumAlarmHookEmbed],
  });
};
