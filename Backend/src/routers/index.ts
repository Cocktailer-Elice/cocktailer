import { Router } from 'express';
import authRouter from './authRouter';
import userRouter from './userRouter';
import cocktailRouter from './cocktailRouter';
import cockflowRouter from './cockflowRouter';

const router = Router();

router.use('/', authRouter);
router.use('/users', userRouter);
router.use('/cocktail', cocktailRouter);
router.use('/cockflow', cockflowRouter);

export default router;
