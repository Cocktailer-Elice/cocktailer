import { isLoggedIn, asyncHandler, createUserValidator } from './middlewares';
import { Router } from 'express';
import { authController } from '../controllers';

const router: Router = Router();

router.post(
  '/signup',
  createUserValidator,
  asyncHandler(authController.signup),
);
router.post('/email-check', asyncHandler(authController.checkEmailDuplicate));
router.post('/login', asyncHandler(authController.login));
router.post('/logout', isLoggedIn, asyncHandler(authController.logout));

export default router;
