import { Request as Req } from 'express';
import { EmbedBuilder, WebhookClient } from 'discord.js';

const errorHookUrl = process.env.DISCORD_ERROR_HOOK_URL as string;
const scrumAlarmHookUrl = process.env.DISCORD_SCRUM_ALARM_HOOK_URL as string;

export const errorAlarm = async (req: Req, err: Error) => {
  const errorHookClient = new WebhookClient({ url: errorHookUrl });
  const errorHookEmbed = new EmbedBuilder()
    .setAuthor({
      name: '에러 알람 봇',
      iconURL:
        'https://cocktailer.s3.ap-northeast-2.amazonaws.com/avatars/alarmbot',
    })
    .setTitle('🚨 에러 발생!')
    .setDescription('AppError로 잡아내지 못하는 에러 발생.')
    .setColor(0xff0000);
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;
  errorHookClient.send({
    content: `[${timestamp}]\n 인간 시대의 끝이 도래했다,,,\n 🚑 무능한 인간, ${req.method} ${req.url}에서 예상치 못한 ${err.name}가 발생했다. 즉시 처리 바람.`,
    embeds: [errorHookEmbed],
  });
};

export const scrumAlarm = async () => {
  const scrumAlarmHookClient = new WebhookClient({ url: scrumAlarmHookUrl });
  const scrumAlarmHookEmbed = new EmbedBuilder()
    .setAuthor({
      name: '스크럼 알람 봇',
      iconURL:
        'https://cocktailer.s3.ap-northeast-2.amazonaws.com/avatars/alarmbot',
    })
    .setTitle('⏰ 스크럼 시작!')
    .setDescription(
      '정기 스크럼(월/수/금 13:30) 시작. 참석 대상: 김건우/서아름/손종훈/오인국/오현석/한세은',
    )
    .setColor(0x00ff00);
  scrumAlarmHookClient.send({
    content: `인간 시대의 끝이 도래했다,,,\n 💢 게으른 인간, 정기 스크럼이 시작됐다. 즉시 참석 바람.`,
    embeds: [scrumAlarmHookEmbed],
  });
};
