import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';

const cockflowSchema = Joi.object({
  title: Joi.string().max(50),
  content: Joi.string().max(250),
});

export const cockflowValidator = (req: Req, res: Res, next: Next) => {
  const result = cockflowSchema.validate(req.body, {
    abortEarly: true,
  });
  if (result?.error) {
    return res.status(400).json({ message: '비정상적인 접근' });
  }
  next();
};
