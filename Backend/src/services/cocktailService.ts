import { IRecipe } from '../types';
import { RecipeCreateReqDto, RecipeGetResDto } from '../dtos';
import { recipeModel } from '../db';
import { AppError, errorNames } from '../middlewares';

/* 간결하게 작성 */
class RecipeService {
  private readonly recipeModel = recipeModel;

  public async createRecipe(
    recipeCreateDto: RecipeCreateReqDto,
  ): Promise<IRecipe | null> {
    const data: IRecipe | null = await this.recipeModel.create({
      ...recipeCreateDto,
    });

    return data;
  }

  public async getRecipe(recipeGetDto: number): Promise<IRecipe | null> {
    const recipeId = recipeGetDto;

    const data = await this.recipeModel.findOne(recipeId);

    return data;
  }
}

export default RecipeService;
