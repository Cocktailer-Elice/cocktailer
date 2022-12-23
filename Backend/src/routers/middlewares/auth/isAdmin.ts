import { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const isAdmin = async (req: Req, res: Res, next: Next) => {
  if (!req.user.isAdmin) {
    return res.status(404).json({ message: '존재하지 않는 요청' });
  }
  next();
};
