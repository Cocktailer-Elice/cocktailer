import * as nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  host: 'smtp.gmail.com',
  secure: true,
  requireTLS: true,
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PW,
  },
});

export const sendWelcomeMail = async (email: string) => {
  let result = true;
  const mailingOptions = {
    to: email,
    from: `Cocktailer <${process.env.GMAIL_ID}>`,
    subject: '어서오세요 칵테일러입니다 🍹',
    text: '회원가입을 축하합니다 🎉',
  };
  transport.sendMail(mailingOptions, (err) => {
    if (err) {
      result = false;
      return;
    }
  });
  return result;
};

export const sendPasswordResetMail = async (
  email: string,
  newPassword: string,
) => {
  let result = true;
  const mailingOptions = {
    to: email,
    from: `Cocktailer <${process.env.GMAIL_ID}>`,
    subject: '저쪽 신사/숙녀분께서 보낸 임시 비밀번호입니다 🍹',
    text: `임시비밀 번호: ${newPassword}`,
  };
  transport.sendMail(mailingOptions, (err) => {
    if (err) {
      result = false;
      return;
    }
  });
  return result;
};

export const sendFarewellMail = async (name: string, email: string) => {
  let result = true;
  const mailingOptions = {
    to: email,
    from: `Cocktailer <${process.env.GMAIL_ID}>`,
    subject: `저쪽 신사/숙녀분께서 보낸 작별인사입니다 🍹`,
    text: `${name}님! 그 동안 칵테일러를 이용해주셔서 감사합니다.\n건강한 모습으로 다시 만나요!`,
  };
  transport.sendMail(mailingOptions, (err) => {
    if (err) {
      result = false;
      return;
    }
  });
  return result;
};
