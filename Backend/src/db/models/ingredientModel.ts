import { Ingredient } from '../../services/types';
import { IngredientCreateReqDto } from 'types';

import IngredientSchema from '../schemas/ingredientSchema';

interface IngredientInterface {
  getIngredient(): Promise<object>;
}

export class IngredientModel implements IngredientInterface {
  public getIngredient = async (): Promise<object> => {
    const result = await IngredientSchema.aggregate([
      {
        $project: { _id: 0, name: 0 },
      },
    ]);

    const data: any = {
      alcohol: result[0].alcohol,
      ingredient: result[1].ingredient,
    };

    return data;
  };
}

const ingredientModel = new IngredientModel();

export { IngredientInterface, ingredientModel };
