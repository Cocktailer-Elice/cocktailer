import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { AsyncFunction } from '../types';

const asyncHandler = (requestHanlder: AsyncFunction) => {
  return async (req: Req, res: Res, next: Next) => {
    try {
      await requestHanlder(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export { asyncHandler };
