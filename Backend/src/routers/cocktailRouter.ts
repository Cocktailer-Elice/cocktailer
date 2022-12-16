import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { asyncHandler } from '../middlewares';

const cocktailRouter: Router = Router();

cocktailRouter.post(
  '/create',
  asyncHandler(cocktailController.createMyCocktail),
);
cocktailRouter.get('/myrecipe', asyncHandler(cocktailController.getMyCocktail));
//router.get('/myrecipe', asyncHandler());

export default cocktailRouter;
