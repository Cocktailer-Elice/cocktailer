import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';

const authAndUserSchema = Joi.object({
  name: Joi.string().min(2).max(20),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string(),
  passwordCheck: Joi.ref('password'),
  tel: Joi.string(),
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
  newPassword: Joi.string(),
  newPasswordCheck: Joi.ref('newPassword'),
});

export const authAndUserValidator = (req: Req, res: Res, next: Next) => {
  const result = authAndUserSchema.validate(req.body, {
    abortEarly: true,
  });
  if (result?.error) {
    console.log(result.error);
    return res.status(400).json('정상적인 경로로 접근해주세요 :(');
  }
  next();
};
