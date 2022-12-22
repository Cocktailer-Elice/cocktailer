import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';

const authAndUserSchema = Joi.object({
  name: Joi.string().min(2).max(30),
  email: Joi.string().email({ minDomainSegments: 2 }).min(10).max(40),
  password: Joi.string().pattern(
    new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/,
    ),
  ),
  passwordCheck: Joi.ref('password'),
  tel: Joi.string().pattern(/^\d{3}\d{3,4}\d{4}$/),
  birthday: Joi.string(),
  alcohol: Joi.string().valid(
    '랜덤',
    '진',
    '럼',
    '보드카',
    '위스키',
    '브랜디',
    '데킬라',
  ),
  code: Joi.number().min(100000).max(999999),
  newPassword: Joi.string().pattern(
    new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/,
    ),
  ),
  newPasswordCheck: Joi.ref('newPassword'),
  avatarUrl: Joi.number(),
});

export const authAndUserValidator = (req: Req, res: Res, next: Next) => {
  const result = authAndUserSchema.validate(req.body, {
    abortEarly: true,
  });
  if (result?.error) {
    console.log(result.error);
    return res.status(400).json({ message: '비정상적인 접근' });
  }
  next();
};
