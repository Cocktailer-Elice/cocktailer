import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';

const cocktailValidation = Joi.object({
  title: Joi.string().min(1).max(20),
  content: Joi.string().min(1).max(200),
  degree: Joi.number().integer().min(1).max(100),
  category: Joi.string().min(1).max(200),
  alcohol: Joi.array().min(1).max(4),
  ingredient: Joi.array().min(1).max(4),
});

export const cocktailValidator = (req: Req, res: Res, next: Next) => {
  const result = cocktailValidation.validate(req.body, {
    abortEarly: true,
  });
  if (result?.error) {
    return res.status(400).json({ message: '비정상적인 접근' });
  }
  next();
};
