import { Router } from 'express';
import { adminValidator, isLoggedIn, isAdmin } from './middlewares';
import { adminController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router();

router.use(adminValidator, isLoggedIn, isAdmin);
router.patch(
  '/verify-bartender',
  asyncHandler(adminController.verifyBartender),
);
router.patch('/change-role', asyncHandler(adminController.changeUserRole));

export default router;
