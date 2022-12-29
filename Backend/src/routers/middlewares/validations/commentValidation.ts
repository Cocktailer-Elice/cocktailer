import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';

const commentSchema = Joi.object({
  content: Joi.string().max(250),
});

export const commentValidator = (req: Req, res: Res, next: Next) => {
  const result = commentSchema.validate(req.body);
  if (result?.error) {
    return res.status(400).json({ message: '비정상적인 접근' });
  }
  next();
};
