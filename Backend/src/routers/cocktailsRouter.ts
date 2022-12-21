import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { asyncHandler } from './middlewares';

const cocktailsRouter: Router = Router();

cocktailsRouter.post('/', asyncHandler(cocktailController.createCocktail));

cocktailsRouter.get('/lists', asyncHandler(cocktailController.getLists));

cocktailsRouter.get('/', asyncHandler(cocktailController.getCocktail)); // query 조회(category)
cocktailsRouter.get('/:id', asyncHandler(cocktailController.getCocktail)); // params 조회(id)

export default cocktailsRouter;
