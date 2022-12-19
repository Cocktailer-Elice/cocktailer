import { Router } from 'express';
import authRouter from './authRouter';
import userRouter from './userRouter';
import cocktailsRouter from './cocktailsRouter';
import cockflowRouter from './cockflowRouter';
import commentRouter from './commentRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/cocktails', cocktailsRouter);
router.use('/cockflow/', cockflowRouter);
router.use('/cockflow/:cockflowId/comments', commentRouter);

export default router;
