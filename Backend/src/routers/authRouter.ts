import { isLoggedIn } from './../middlewares/auth/isLoggedIn';
import { Router } from 'express';
import { authController } from '../controllers';
import { asyncHandler } from '../middlewares';

const router: Router = Router();

router.post('/signup', asyncHandler(authController.signup));
router.post('/login', asyncHandler(authController.login));
router.post('/logout', isLoggedIn, asyncHandler(authController.logout));

export default router;
