import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { cockgorithmController } from '../controllers/cockgorithmController';
import { asyncHandler, isLoggedIn } from './middlewares';

const cocktailsRouter: Router = Router();

////////////////////////////////
//       목데이터 생성기       //
////////////////////////////////

cocktailsRouter.get(
  '/makemockdata',
  asyncHandler(cocktailController.makeMockData),
);

cocktailsRouter.get('/lists', asyncHandler(cocktailController.getLists));

cocktailsRouter.get(
  '/',
  asyncHandler(cocktailController.findCocktailCategoryAndSearch),
);

cocktailsRouter.get(
  '/:cocktailId',
  asyncHandler(cocktailController.findCocktailId),
);

cocktailsRouter.post(
  '/cockgorithm',
  asyncHandler(cockgorithmController.activateCockgorithm),
);

//////////////////////////////////////////////////////
//cocktailsRouter.use(isLoggedIn); ///에러시 삭제하시오//
/////////////////////////////////////////////////////

cocktailsRouter.post('/', asyncHandler(cocktailController.createCocktail));

cocktailsRouter.get(
  '/userId/:userId',
  asyncHandler(cocktailController.findByUserId),
);

export default cocktailsRouter;
