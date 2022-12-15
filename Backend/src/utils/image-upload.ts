import s3 from '../configs/aws-s3';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const generateUploadURL = async (filename: string, folder: string) => {
  const params = {
    Bucket: 'cocktailer',
    Key: `${folder}/${filename}${Date.now()}`,
  };
  const command = new PutObjectCommand(params);

  const signedURL = await getSignedUrl(s3, command, { expiresIn: 600 });
  return signedURL;
};
