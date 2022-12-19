import { S3Client } from '@aws-sdk/client-s3';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const S3_ID = process.env.AWS_ID;
const S3_SECRET = process.env.AWS_SECRET;

const s3 = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: S3_ID as string,
    secretAccessKey: S3_SECRET as string,
  },
});

export const generateUploadURL = async (folder: string) => {
  const params = {
    Bucket: 'cocktailer',
    Key: `${folder}/${Date.now()}`,
  };
  const command = new PutObjectCommand(params);

  const signedURL = await getSignedUrl(s3, command, { expiresIn: 600 });
  return signedURL;
};
