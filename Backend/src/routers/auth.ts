import { Router } from 'express';
import { authController } from '../controllers';
import { asyncHandler } from '../middlewares';

const router: Router = Router();

router.post('/singup', asyncHandler(authController.signUp));

export default router;
