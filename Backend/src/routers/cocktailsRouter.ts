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

////////// Cocktail Ranking / User Ranking //////////
cocktailsRouter.get(
  '/home',
  asyncHandler(cocktailController.getHomeCocktailAndUserList),
);

cocktailsRouter.get('/lists', asyncHandler(cocktailController.getLists));

cocktailsRouter.get(
  '/',
  asyncHandler(cocktailController.findCocktailCategoryAndSearch),
);

cocktailsRouter.get(
  '/my-cocktails',
  isLoggedIn,
  asyncHandler(cocktailController.findByUserId),
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
cocktailsRouter.use(isLoggedIn); ///에러시 삭제하시오//
/////////////////////////////////////////////////////

cocktailsRouter.post('/', asyncHandler(cocktailController.createCocktail));

cocktailsRouter.get(
  '/my-cocktails/:userId',
  asyncHandler(cocktailController.findByUserId),
);

cocktailsRouter.patch(
  '/updatecocktail/:cocktailId',
  asyncHandler(cocktailController.updateCocktail),
);

cocktailsRouter.delete(
  '/deletecocktail/:cocktailId',
  asyncHandler(cocktailController.deleteCocktail),
);

cocktailsRouter.get(
  '/likes/:cocktailId',
  asyncHandler(cocktailController.cocktailLikes),
);

export default cocktailsRouter;
