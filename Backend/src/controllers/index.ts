import { generateUploadURL } from './utils';
import { Request as Req, Response as Res } from 'express';

export const generatePresignedUrl = async (req: Req, res: Res) => {
  const { folder } = req.body;
  const presignedUrl = await generateUploadURL(folder);
  res.status(200).json(presignedUrl);
};

export * from './adminController';
export * from './authContorller';
export * from './userController';
export * from './cockflowController';
export * from './commentController';
