import { Router } from 'express';
import { userController } from '../controllers';
import { asyncHandler } from '../middlewares';

const router: Router = Router();

router.get('/:id', asyncHandler(userController.getUserById));

export default router;
