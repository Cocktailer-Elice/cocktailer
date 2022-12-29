import { AppError } from 'Backend/src/appError';
import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import loggingEvents from '../../../events/errorEvent';

const errorHandler = (
  err: AppError | Error,
  req: Req,
  res: Res,
  next: Next,
): Res => {
  if ('status' in err) {
    loggingEvents.emit('AppErrorOccured', req, err);
    let { status = 500, message } = err;
    if (!message) message = '원인 불명 에러. 서버 담당자 문의';
    return res.status(status as number).json({ message });
  }
  loggingEvents.emit('uncaughtErrorOccured', req, err);
  return res.status(500).json({ message: '원인 불명 에러. 서버 담당자 문의' });
};

export { errorHandler };
