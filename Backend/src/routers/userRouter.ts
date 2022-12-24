import { authAndUserValidator } from './middlewares';
import { isLoggedIn } from './middlewares/auth/isLoggedIn';
import { Router } from 'express';
import { commentController, userController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router();

router.use(authAndUserValidator);
router.post('/find-email', asyncHandler(userController.findUserEmail));
router.use(isLoggedIn);
router.patch('/', asyncHandler(userController.changePassword));
router.delete('/', asyncHandler(userController.softDeleteUser));
router.get('/mypage', asyncHandler(userController.getMyPosts));
router.post('/verify-user', asyncHandler(userController.verifyUser));
router.patch('/profile', asyncHandler(userController.updateUserProfile));
router.patch('/apply', asyncHandler(userController.updateUserState));
router.get('/my-comments', asyncHandler(commentController.getMyComments));

export default router;
