import { Router } from 'express';
import { isLoggedIn } from './middlewares/auth/isLoggedIn';
import { commentController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router({ mergeParams: true });

router.use(isLoggedIn);
router.post('/', asyncHandler(commentController.createComment));
router.post('/:commentId', asyncHandler(commentController.addSubcomment));
router.put('/:commentId', asyncHandler(commentController.updateComment));
router.patch('/:commentId', asyncHandler(commentController.adoptComment));
router.delete('/:commentId', asyncHandler(commentController.deleteComment));
router.put(
  '/:commentId/subcomments/:subCommentId',
  asyncHandler(commentController.updateSubComment),
);
router.delete(
  '/:commentId/subcomments/:subCommentId',
  asyncHandler(commentController.deleteSubComment),
);

export default router;
