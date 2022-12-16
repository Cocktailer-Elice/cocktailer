import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { Ingredient } from '../services/types';
import { IngredientCreateReqDto } from 'types';
import IngredientService from '../services/ingredientService';

// import
class IngredientController {
  private readonly ingredientService = new IngredientService();

  public createIngredient = async (req: Req, res: Res, next: Next) => {
    const ingredientInfo: IngredientCreateReqDto = req.body;

    const createIngredientData: Ingredient | null =
      await this.ingredientService.createIngredient(ingredientInfo);
  };

  public getIngredient = async (req: Req, res: Res, next: Next) => {
    const ingredientId = Number(req.query.ingredient);

    const getIngredientData = await this.ingredientService.getIngredient(
      ingredientId,
    );

    res.status(200).json({ getIngredientData: getIngredientData });
  };
}

const ingredientController = new IngredientController();

export { ingredientController };
