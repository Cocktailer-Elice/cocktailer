import { Router } from 'express';
import authRouter from './authRouter';
import userRouter from './userRouter';
import cocktailRouter from './cocktailRouter';
import cockflowRouter from './cockflowRouter';
import commentRouter from './commentRouter';

const router = Router();

router.use('/', authRouter);
router.use('/users', userRouter);
router.use('/cocktail', cocktailRouter);
router.use('/cockflow/', cockflowRouter);
router.use('/cockflow/:cockflowId/comments', commentRouter);

export default router;
