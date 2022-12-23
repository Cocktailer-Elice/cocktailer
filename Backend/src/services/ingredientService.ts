import { Ingredient } from './types';
import { IngredientCreateReqDto } from 'types';
import { ingredientModel } from '../db';
class IngredientService {
  /* test */
  private readonly ingredientModel = ingredientModel;

  public async getIngredient(): Promise<object> {
    const data: object = await this.ingredientModel.getIngredient();

    return data;
  }
}

export default IngredientService;
