import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { cockgorithmController } from '../controllers/cockgorithmController';
import { asyncHandler, isLoggedIn } from './middlewares';

const cocktailsRouter: Router = Router();

////////////////////////////목데이터 생성기////////////////////////////
cocktailsRouter.get(
  '/makemockdata',
  asyncHandler(cocktailController.makeMockData),
);
////////////////////////////목데이터 생성기////////////////////////////

////////// Cocktail Ranking / User Ranking //////////
cocktailsRouter.get(
  '/home',
  asyncHandler(cocktailController.getHomeCocktailAndUserList),
);

////////// 전체 리스트 각 6개씩 //////////
cocktailsRouter.get('/lists', asyncHandler(cocktailController.getLists));

////////// 칵테일을 카테고리와 키워드 official 조건으로 검색 //////////
cocktailsRouter.get(
  '/',
  asyncHandler(cocktailController.findCocktailCategoryAndSearch),
);

////////// 내 칵테일 전체 가져오기 //////////
cocktailsRouter.get(
  '/my-cocktails',
  isLoggedIn,
  asyncHandler(cocktailController.findByUserId),
);

////////// 칵테일id로 상세보기 //////////
cocktailsRouter.get(
  '/:cocktailId',
  asyncHandler(cocktailController.findCocktailId),
);

////////// 칵고리즘 작동 //////////
cocktailsRouter.post(
  '/cockgorithm',
  asyncHandler(cockgorithmController.activateCockgorithm),
);

//
//////////////////////////////////////////////////////
cocktailsRouter.use(isLoggedIn); ///에러시 삭제하시오//
/////////////////////////////////////////////////////
//

////////// 칵테일 문서 생성 //////////
cocktailsRouter.post('/', asyncHandler(cocktailController.createCocktail));

////////// 칵테일 업데이트 //////////
cocktailsRouter.patch(
  '/updatecocktail/:cocktailId',
  asyncHandler(cocktailController.updateCocktail),
);

////////// 칵테일 삭제 //////////
cocktailsRouter.delete(
  '/deletecocktail/:cocktailId',
  asyncHandler(cocktailController.deleteCocktail),
);

////////// 칵테일 좋아요 //////////
cocktailsRouter.get(
  '/likes/:cocktailId',
  asyncHandler(cocktailController.cocktailLikes),
);

export default cocktailsRouter;
