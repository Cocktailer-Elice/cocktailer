import { Router } from 'express';
import { isLoggedIn } from './middlewares/auth/isLoggedIn';
import { commentController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router({ mergeParams: true });

router.use(isLoggedIn);
router.post('/', asyncHandler(commentController.createComment));
router.put('/:commentId', asyncHandler(commentController.updateComment));
router.patch('/:commentId', asyncHandler(commentController.adoptComment));
router.patch(
  '/:commentId/like',
  asyncHandler(commentController.updateCommentLikes),
);
router.delete('/:commentId', asyncHandler(commentController.deleteComment));

export default router;
