import { authAndUserValidator } from './middlewares';
import { isLoggedIn } from './middlewares/auth/isLoggedIn';
import { Router } from 'express';
import { userController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router();

router.use(authAndUserValidator);
router.get('/', asyncHandler(userController.getUserById));
router.post('/find-email', asyncHandler(userController.findUserEmail));
router.post('/send-code', userController.generateAuthCode);
router.post('/verify-user', asyncHandler(userController.verifyUser));
router.use(isLoggedIn);
router.get('/:id', asyncHandler(userController.getUserById));
router.put('/:id', asyncHandler(userController.getUserById));
router.post(
  '/validate-password',
  asyncHandler(userController.validatePassword),
);
export default router;
