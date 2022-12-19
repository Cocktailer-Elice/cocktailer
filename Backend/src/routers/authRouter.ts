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
router.post('/auth', asyncHandler(authController.generateAuthCode));
router.post('/validate-code', asyncHandler(authController.validateAuthCode));

router.use(isLoggedIn);
router.post('/logout', asyncHandler(authController.logout));
router.post(
  '/validate-password',
  asyncHandler(authController.validatePassword),
);

export default router;
