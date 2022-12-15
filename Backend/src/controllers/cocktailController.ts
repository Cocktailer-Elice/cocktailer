import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ICocktail } from '../types';
import { CocktailCreateReqDto, CocktailGetResDto } from '../dtos';
import RecipeService from '../services/cocktailService';

class CoctailController {
  private readonly recipeService = new RecipeService();

  public createMyRecipe = async (req: Req, res: Res, next: Next) => {
    try {
      const recipeInfo: CocktailCreateReqDto = req.body;

      const createRecipeData: ICocktail | null =
        await this.recipeService.createRecipe(recipeInfo);

      res.status(200).json({ data: createRecipeData, message: 'recipeCreate' });
    } catch (error) {
      next(error);
    }
  };

  public getMyRecipe = async (req: Req, res: Res, next: Next) => {
    try {
      const recipeId = Number(req.query.myrecipe);

      const getRecipeData = await this.recipeService.getRecipe(recipeId);

      res.status(200).json({ getRecipeData: getRecipeData });
    } catch (error) {
      next(error);
    }
  };
}

const cocktailController = new CoctailController();

export { cocktailController };
