import { Router } from 'express';
import authRouter from './authRouter';
import userRouter from './userRouter';
import cocktailRouter from './cocktailRouter';
import postRouter from './postRouter';

const router = Router();

router.use('/', authRouter);
router.use('/users', userRouter);
router.use('/cocktail', cocktailRouter);
router.use('/posts', postRouter);

export default router;
