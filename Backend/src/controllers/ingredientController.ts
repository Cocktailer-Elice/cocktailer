import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { IngredientObject } from 'types';

import IngredientService from '../services/ingredientService';

// import
class IngredientController {
  private readonly ingredientService = new IngredientService();

  public getIngredient = async (req: Req, res: Res, next: Next) => {
    const getIngredient: IngredientObject =
      await this.ingredientService.getIngredient();

    res.status(200).json({ getIngredient: getIngredient });
  };
}

const ingredientController = new IngredientController();

export { ingredientController };
