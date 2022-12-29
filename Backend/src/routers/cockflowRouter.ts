import { cockflowValidator, isLoggedIn } from './middlewares';
import { Router } from 'express';
import { cockflowController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router();

router.use(cockflowValidator);
router.get('/', asyncHandler(cockflowController.getCockflowsByRequest));
router.get(
  '/my-cockflows',
  isLoggedIn,
  asyncHandler(cockflowController.getMyCockflows),
);
router.get('/:cockflowId', asyncHandler(cockflowController.getCockflowById));

router.use(isLoggedIn);
router.post('/', asyncHandler(cockflowController.createCockflow));
router.put('/:cockflowId', asyncHandler(cockflowController.updateCockflow));
router.delete('/:cockflowId', asyncHandler(cockflowController.deleteCockflow));

export default router;
