import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { asyncHandler } from '../middlewares';

const cocktailRouter: Router = Router();

cocktailRouter.post('/create', asyncHandler(cocktailController.createMyRecipe));
cocktailRouter.get('/myrecipe', asyncHandler(cocktailController.getMyRecipe));
//router.get('/myrecipe', asyncHandler());

export default cocktailRouter;
