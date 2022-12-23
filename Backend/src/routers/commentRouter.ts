import { Router } from 'express';
import { isLoggedIn } from './middlewares/auth/isLoggedIn';
import { commentController } from '../controllers';
import { asyncHandler, commentValidator } from './middlewares';

const router: Router = Router({ mergeParams: true });

router.use(commentValidator, isLoggedIn);
router.post('/', asyncHandler(commentController.createComment));
router.post('/:commentId', asyncHandler(commentController.addSubcomment));
router.put('/:commentId', asyncHandler(commentController.updateComment));
router.patch('/:commentId', asyncHandler(commentController.adoptComment));
router.delete('/:commentId', asyncHandler(commentController.deleteComment));

export default router;
