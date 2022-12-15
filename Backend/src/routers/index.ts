import { Router } from 'express';
import authRouter from './auth';
import cocktailRouter from './cocktailRouter';

const router = Router();

router.use('/', authRouter);
router.use('/recipes', cocktailRouter);

export default router;
