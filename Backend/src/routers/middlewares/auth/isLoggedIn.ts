import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { verify } from 'jsonwebtoken';
import { TokenData } from '../types';
import { errorNames } from '../errors/error-names';
import { userModel } from '../../../db/models/userModel';
import { AppError } from '../errors';
import { tokenConfig } from '../../../configs/env';

export const isLoggedIn = async (req: Req, res: Res, next: Next) => {
  const secretKey = tokenConfig.ACCESS_KEY as string;
  const Authorization = req.cookies.Authorization;

  if (!Authorization) {
    throw new AppError(
      errorNames.authenticationError,
      400,
      'Auhorization 헤더 없음',
    );
  }

  if (Authorization) {
    const decodedData = (await verify(Authorization, secretKey)) as TokenData;
    const userId = decodedData.id;
    const foundUser = await userModel.findById(userId);

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
  }
};
