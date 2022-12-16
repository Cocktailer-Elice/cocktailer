import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { asyncHandler } from './middlewares';

const cocktailRouter: Router = Router();

cocktailRouter.post('/create', asyncHandler(cocktailController.createCocktail));
cocktailRouter.get('/view', asyncHandler(cocktailController.getCocktail));
//router.get('/myrecipe', asyncHandler());

export default cocktailRouter;
