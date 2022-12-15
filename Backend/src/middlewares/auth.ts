import { errorNames } from './errors/error-names';
import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { verify } from 'jsonwebtoken';
import { TokenData } from '../types';
import User from '../db/schemas/user';
import { AppError } from './errors';

const authMiddleware = async (req: Req, res: Res, next: Next) => {
  try {
    const ACCESS_KEY = process.env.ACCEESS_KEY;
    const Authorization = req.cookies.Authorization || null;

    if (!Authorization) {
      next(
        new AppError(
          errorNames.authenticationError,
          400,
          'Authentication token missing',
        ),
      );
    }
    if (Authorization) {
      const secretKey: string = ACCESS_KEY!;
      const verificationResponse = (await verify(
        Authorization,
        secretKey,
      )) as TokenData;
      const userId = verificationResponse.id;
      const foundUser = await User.findById(userId);

      if (!foundUser) {
        next(
          new AppError(
            errorNames.authenticationError,
            401,
            '해당하는 유저 없음',
          ),
        );
      }
      req.user =
        {
          id: foundUser!.id,
          email: foundUser!.email,
          isAdmin: foundUser!.isAdmin,
          isBartender: foundUser!.isBartender,
        } || null;
      next();
    }
  } catch (error) {
    next(new AppError(errorNames.authenticationError, 401, '잘못된 토큰'));
  }
};

export default authMiddleware;
