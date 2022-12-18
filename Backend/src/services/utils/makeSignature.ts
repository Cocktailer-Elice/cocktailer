import CryptoJS from 'crypto-js';

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
