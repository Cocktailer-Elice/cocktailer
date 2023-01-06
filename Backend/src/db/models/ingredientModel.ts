import IngredientSchema from '../schemas/ingredientSchema';
import { IngredientDbResult } from '../types/ingredientType';

interface IngredientInterface {
  getIngredient(): Promise<IngredientDbResult>;
}

export class IngredientModel implements IngredientInterface {
  public getIngredient = async (): Promise<IngredientDbResult> => {
    const result: IngredientDbResult[] = await IngredientSchema.aggregate([
      {
        $project: { _id: 0, name: 0 },
      },
    ]);



    return {
      alcohol: result[0].alcohol,
      ingredient: result[1].ingredient,
    };
  };
}

const ingredientModel = new IngredientModel();

export { IngredientInterface, ingredientModel };
