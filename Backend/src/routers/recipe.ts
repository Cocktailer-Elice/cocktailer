import { Router } from 'express';
import { RecipeController } from '../controllers/recipe';

const router = Router();

/* 아래 방식으로 작성 */

router.post('/create', RecipeController.createRecipe);

export default router;
