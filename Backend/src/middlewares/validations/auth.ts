import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  passwordCheck: Joi.ref('password'),
});

export const createUserValidator = (req: Req, res: Res, next: Next) => {
  const result = createUserSchema.validate(req.body, {
    abortEarly: false,
  });
  if (result?.error) {
    return res.status(400).json('정상적인 경로로 접근해주세요 :(');
  }
  next();
};
