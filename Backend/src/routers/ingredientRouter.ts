import { Router } from 'express';
import { ingredientController } from '../controllers/ingredientController';
import { asyncHandler } from './middlewares';

const ingredientRouter: Router = Router();

ingredientRouter.get('/', asyncHandler(ingredientController.getIngredient));
//router.get('/myrecipe', asyncHandler());

export default ingredientRouter;
