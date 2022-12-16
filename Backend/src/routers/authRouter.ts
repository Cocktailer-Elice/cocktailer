import { isLoggedIn } from './../middlewares/auth/isLoggedIn';
import { Router } from 'express';
import { authController } from '../controllers';
import { asyncHandler, createUserValidator } from '../middlewares';

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
