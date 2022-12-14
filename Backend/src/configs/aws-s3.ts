import { S3Client } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId:
      process.env.S3_ID || 'AWS-S3 엑세스 ID 확인 불가, ENV 파일 확인!',
    secretAccessKey:
      process.env.S3_SECRET || 'AWS-S3 액세스 KEY 확인 불가, ENV 파일 확인!',
  },
});

export default s3;
