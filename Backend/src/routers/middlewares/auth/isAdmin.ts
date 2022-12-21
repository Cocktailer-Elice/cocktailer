import { AppError, errorNames } from '../';
import { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const isAdmin = async (req: Req, res: Res, next: Next) => {
  if (!req.user.isAdmin) {
    throw new AppError(errorNames.resourceNotFoundError, 404, '잘못된 접근');
  }
  next();
};
