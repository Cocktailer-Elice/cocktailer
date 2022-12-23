import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { cockgorithmController } from '../controllers/cockgorithmController';
import { asyncHandler } from './middlewares';

const cocktailsRouter: Router = Router();

////////////////////////////////
//       목데이터 생성기       //
////////////////////////////////

cocktailsRouter.get(
  '/makemockdata',
  asyncHandler(cocktailController.makeMockData),
);

cocktailsRouter.post('/', asyncHandler(cocktailController.createCocktail));

cocktailsRouter.get('/lists', asyncHandler(cocktailController.getLists));

cocktailsRouter.get(
  '/userId/:userId',
  asyncHandler(cocktailController.findByUserId),
);

cocktailsRouter.get(
  '/',
  asyncHandler(cocktailController.findCocktailCategoryAndSearch),
);

cocktailsRouter.get('/:id', asyncHandler(cocktailController.findCocktailId));

cocktailsRouter.post(
  '/cockgorithm',
  asyncHandler(cockgorithmController.activateCockgorithm),
);

export default cocktailsRouter;
