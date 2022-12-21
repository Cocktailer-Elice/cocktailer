import { isLoggedIn } from './middlewares';
import { Router } from 'express';
import { cockflowController } from '../controllers';
import { asyncHandler } from './middlewares';

const router: Router = Router();

router.get('/', asyncHandler(cockflowController.getCockflows));
router.get('/:cockflowId', asyncHandler(cockflowController.getCockflowById));

router.use(isLoggedIn);
router.post('/', asyncHandler(cockflowController.createCockflow));
router.patch('/:cockflowId', asyncHandler(cockflowController.deleteCockflow));

export default router;
