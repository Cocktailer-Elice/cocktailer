import { Router } from 'express';
import authRouter from './authRouter';
import userRouter from './userRouter';
import cocktailsRouter from './cocktailsRouter';
import cockflowRouter from './cockflowRouter';
import commentRouter from './commentRouter';
import { generatePresignedUrl } from '../controllers';
import { asyncHandler } from './middlewares';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/cocktails', cocktailsRouter);
router.use('/cockflow', cockflowRouter);
router.use('/cockflow/:cockflowId/comments', commentRouter);
router.post('/image-upload', asyncHandler(generatePresignedUrl));

export default router;
