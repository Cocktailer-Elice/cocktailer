import { ingredientModel } from '../db';
import { IngredientObject } from './types';
class IngredientService {
  /* test */
  private readonly ingredientModel = ingredientModel;

  public async getIngredient(): Promise<IngredientObject> {
    const data: IngredientObject = await this.ingredientModel.getIngredient();

    console.log(data);
    return data;
  }
}

export default IngredientService;
