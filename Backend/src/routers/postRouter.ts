import { isLoggedIn } from './middlewares/auth/isLoggedIn';
import { Router } from 'express';
import { postController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router();

router.use(isLoggedIn);
router.post('/', isLoggedIn, asyncHandler(postController.createPost));

export default router;
