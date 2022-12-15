import { Router } from 'express';
import authRouter from './auth';
import recipeRouter from './recipeRouter';

const router = Router();

router.use('/', authRouter);
router.use('/recipes', recipeRouter);

export default router;
