import { isLoggedIn } from './isLoggedIn';
import { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const exportUserId = async (req: Req, res: Res, next: Next) => {
  if (req.cookies.Authorization !== undefined) {
    isLoggedIn(req, res, next);
  } else if (req.cookies.Authorization === undefined) {
    req.user = {
      userId: null,
    };
    next();
  }
};
