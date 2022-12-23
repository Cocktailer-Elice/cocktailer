import { Request as Req, Response as Res, NextFunction as Next } from 'express';

export interface AsyncFunction {
  (req: Req, res: Res, next: Next): Promise<void>;
}
