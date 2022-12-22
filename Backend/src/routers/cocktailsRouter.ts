import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { asyncHandler } from './middlewares';

const cocktailsRouter: Router = Router();

cocktailsRouter.post('/', asyncHandler(cocktailController.createCocktail));

cocktailsRouter.get('/lists', asyncHandler(cocktailController.getLists));

cocktailsRouter.get(
  '/',
  asyncHandler(cocktailController.findCocktailCategoryAndSearch),
);

cocktailsRouter.get('/:id', asyncHandler(cocktailController.findCocktailId));

export default cocktailsRouter;
