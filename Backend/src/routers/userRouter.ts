import { authAndUserValidator } from './middlewares';
import { isLoggedIn } from './middlewares/auth/isLoggedIn';
import { Router } from 'express';
import { userController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router();

router.use(authAndUserValidator);
router.get('/', asyncHandler(userController.getUserById));
router.post('/find-email', asyncHandler(userController.findUserEmail));
router.use(isLoggedIn);
router.get('/:userId', asyncHandler(userController.getUserById));
router.put('/:userId', asyncHandler(userController.getUserById));
router.patch('/:userId', asyncHandler(userController.changePassword));
router.delete('/:userId', asyncHandler(userController.softDeleteUser));
router.post('/send-code', userController.generateAuthCode);
router.post('/verify-user', asyncHandler(userController.verifyUser));
router.post(
  '/validate-password',
  asyncHandler(userController.validatePassword),
);

export default router;
