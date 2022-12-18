import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { verify } from 'jsonwebtoken';
import { TokenData } from '../types';
import { errorNames } from '../errors/error-names';
import { userModel } from '../../../db/models/userModel';
import { AppError } from '../errors';

const ACCESS_KEY = process.env.ACCESS_KEY;

export const isLoggedIn = async (req: Req, res: Res, next: Next) => {
  const secretKey = ACCESS_KEY as string;
  const token = req.cookies.Authorization;

  if (!token) {
    throw new AppError(
      errorNames.authenticationError,
      400,
      'Authorization 헤더 없음',
    );
  }

  let decodedData;
  try {
    decodedData = verify(token, secretKey) as TokenData;
  } catch (err: any) {
    return res.status(419).json({ message: err.message });
  }

  const userId = (decodedData as TokenData).id;
  const foundUser = await userModel.Mongo.findById(userId);

  if (!foundUser) {
    throw new AppError(
      errorNames.authenticationError,
      401,
      '해당하는 유저 없음',
    );
  }
  req.user = {
    userId: foundUser.id,
    email: foundUser.email,
    isAdmin: foundUser.isAdmin,
    isBartender: foundUser.isBartender,
  };

  next();
};
