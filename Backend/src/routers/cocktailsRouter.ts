import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { asyncHandler } from './middlewares';

const cocktailsRouter: Router = Router();

cocktailsRouter.post('/', asyncHandler(cocktailController.createCocktail));

cocktailsRouter.get('/lists', asyncHandler(cocktailController.getLists));

cocktailsRouter.get('/', asyncHandler(cocktailController.findCategory));

cocktailsRouter.get('/:id', asyncHandler(cocktailController.findId));

export default cocktailsRouter;
