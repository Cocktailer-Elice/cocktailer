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
  tel: Joi.string().pattern(/^(010)\d{3,4}\d{4}$/),
  birthday: Joi.string()
    .min(10)
    .max(10)
    .pattern(new RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)),
  alcohol: Joi.string().valid(
    '랜덤',
    '진',
    '럼',
    '보드카',
    '위스키',
    '브랜디',
    '데킬라',
  ),
  code: Joi.string().min(6).max(6),
  newPassword: Joi.string().pattern(
    new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/,
    ),
  ),
  avatarUrl: Joi.string().min(13).max(13),
  isAutoLogin: Joi.boolean(),
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
