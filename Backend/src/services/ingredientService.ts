import { Ingredient } from './types';
import { IngredientCreateReqDto } from 'types';
import { ingredientModel } from '../db';
class IngredientService {
  /* test */
  private readonly ingredientModel = ingredientModel;

  public async createIngredient(
    ingredientCreateDto: IngredientCreateReqDto,
  ): Promise<Ingredient | null> {
    const data: Ingredient | null = await this.ingredientModel.create({
      ...ingredientCreateDto,
    });

    return data;
  }

  public async getIngredient(ingredientId: number): Promise<Ingredient | null> {
    const data = await this.ingredientModel.findOne(ingredientId);

    return data;
  }
}

export default IngredientService;
