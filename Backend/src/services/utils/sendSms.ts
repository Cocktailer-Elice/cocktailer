import CryptoJS from 'crypto-js';
import fetch from 'node-fetch';

export const makeSignature = (
  timestamp: string,
  sensId: string,
  accessKey: string,
  secretKey: string,
) => {
  const space = ' ';
  const newLine = '\n';
  const method = 'POST';
  const url = `/sms/v2/services/${sensId}/messages`;
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url);
  hmac.update(newLine);
  hmac.update(timestamp);
  hmac.update(newLine);
  hmac.update(accessKey);

  const hash = hmac.finalize();

  return hash.toString(CryptoJS.enc.Base64);
};

export const sendAuthCodeMessage = async (tel: string, code: string) => {
  const { SENS_ID, SENS_ACCESS_KEY, SENS_SECRET_KEY, SENS_FROM } = process.env;
  const timestamp = Date.now() + '';
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${SENS_ID}/messages`;
  const signature = makeSignature(
    timestamp,
    SENS_ID as string,
    SENS_ACCESS_KEY as string,
    SENS_SECRET_KEY as string,
  );
  const data = JSON.stringify({
    type: 'SMS',
    contentType: 'COMM',
    countryCode: '82',
    from: SENS_FROM,
    to: tel,
    content: `${code} <- 저쪽 신사/숙녀분께서 보내신 칵테일러 인증번호 입니다.`,
    messages: [
      {
        to: tel,
      },
    ],
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-ncp-apigw-timestamp': timestamp,
      'x-ncp-iam-access-key': SENS_ACCESS_KEY as string,
      'x-ncp-apigw-signature-v2': signature,
    },
    body: data,
  });

  return response;
};
