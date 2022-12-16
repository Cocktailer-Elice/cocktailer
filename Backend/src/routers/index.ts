import { Router } from 'express';
import authRouter from './authRouter';
import userRouter from './userRouter';
import cocktailRouter from './cocktailRouter';

const router = Router();

router.use('/', authRouter);
router.use('/users', userRouter);
router.use('/cocktail', cocktailRouter);

export default router;
