import { authAndUserValidator } from './middlewares';
import { isLoggedIn } from './middlewares/auth/isLoggedIn';
import { Router } from 'express';
import { userController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router();

router.use(authAndUserValidator);
router.post('/find-email', asyncHandler(userController.findUserEmail));
router.use(isLoggedIn);
router.get('/', asyncHandler(userController.getMyPosts));
router.patch('/', asyncHandler(userController.changePassword));
router.delete('/', asyncHandler(userController.softDeleteUser));
router.patch('/profile', asyncHandler(userController.updateUserProfile));
router.post('/verify-user', asyncHandler(userController.verifyUser));
router.post(
  '/validate-password',
  asyncHandler(userController.validatePassword),
);

export default router;
