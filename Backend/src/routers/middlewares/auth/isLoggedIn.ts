import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { jwtModule } from './jwtModule';
import { redisCache } from '../../../redis';
import { IUser, userModel } from '../../../db';
import { createCookie, createToken } from '../../../controllers/utils';

const ACCESS_KEY = process.env.ACCESS_KEY;

export const isLoggedIn = async (req: Req, res: Res, next: Next) => {
  const secretKey = ACCESS_KEY as string;
  const [token, userId] = req.cookies.Authorization.split('/');
  if (!token) {
    return res.status(401).json({ message: '로그인 필요' });
  }

  let decodedData = jwtModule.verifyToken(token, secretKey);

  if (decodedData === 'TokenExpiredError') {
    if (await redisCache.exists(`${userId}`)) {
      const user = (await userModel.Mongo.findByFilter({
        _id: userId,
      })) as IUser;
      decodedData = {
        userId: user.id,
        name: user.name,
        email: user.email,
        nickname: user.nickname,
        isAdmin: user.isAdmin,
        isBartender: user.isBartender,
        avatarUrl: user.avatarUrl,
      };
      const tokenData = createToken(user);
      const cookie = createCookie(tokenData, user._id);
      res.setHeader('Set-Cookie', cookie);
    }
  }
  if (decodedData !== 'TokenExpiredError' && typeof decodedData === 'string') {
    res.setHeader('Set-Cookie', 'Authorization=; Max-age=0; path=/');
    return res.status(419).json({ message: '만료 또는 손상된 토큰' });
  }

  req.user = {
    userId: decodedData.userId,
    name: decodedData.name,
    email: decodedData.email,
    nickname: decodedData.nickname,
    isAdmin: decodedData.isAdmin,
    isBartender: decodedData.isBartender,
    avatarUrl: decodedData.avatarUrl,
  };
  next();
};
