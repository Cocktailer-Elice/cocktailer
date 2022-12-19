import { Router } from 'express';
import { cocktailController } from '../controllers/cocktailController';
import { asyncHandler } from './middlewares';

const cocktailRouter: Router = Router();

cocktailRouter.post('/', asyncHandler(cocktailController.createCocktail));

cocktailRouter.get('/', asyncHandler(cocktailController.getCocktail)); // query 조회(category)
cocktailRouter.get('/:id', asyncHandler(cocktailController.getCocktail)); // params 조회(id)

export default cocktailRouter;
