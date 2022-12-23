import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { verify } from 'jsonwebtoken';
import { Cookie } from '../types';

const ACCESS_KEY = process.env.ACCESS_KEY;

export const isLoggedIn = async (req: Req, res: Res, next: Next) => {
  const secretKey = ACCESS_KEY as string;
  const token = req.cookies.Authorization;
  if (!token) {
    return res.status(401).json({ message: '로그인 필요' });
  }

  let decodedData;
  try {
    decodedData = verify(token, secretKey) as Cookie;
  } catch (err: any) {
    res.setHeader('Set-Cookie', 'Authorization=; Max-age=0; path=/');
    return res.status(419).json({ message: '만료 또는 손상된 토큰' });
  }

  // const { userId } = decodedData as Cookie;
  // const foundUser = await userModel.Mongo.findById(userId);

  // if (!foundUser) {
  //   return res.status(401).json({ message: '해당하는 유저 없음' });
  // }
  req.user = {
    userId: decodedData.userId,
    email: decodedData.email,
    nickname: decodedData.nickname,
    isAdmin: decodedData.isAdmin,
    isBartender: decodedData.isBartender,
  };

  next();
};
