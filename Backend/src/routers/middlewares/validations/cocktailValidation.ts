import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';

const cocktailValidation = Joi.object({
  category: Joi.string().min(1).max(200),
  name: Joi.string().min(1).max(20),
  flavor: Joi.array().min(1).max(10),
  degree: Joi.number().integer().min(1).max(100),
  img: Joi.string(),
  ratio: Joi.object(),
  content: Joi.string().min(1).max(200),
});

export const cocktailValidator = (req: Req, res: Res, next: Next) => {
  const result = cocktailValidation.validate(req.body, {
    abortEarly: true,
  });
  if (result?.error) {
    return res.status(400).json({ message: '입력정보 오류' });
  }
  next();
};
