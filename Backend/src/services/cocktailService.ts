import { ICocktail } from '../types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import { cocktailModel } from '../db';
import { AppError, errorNames } from '../middlewares';
import { Collection } from 'mongoose';

/* 간결하게 작성 */
class CocktailService {
  private readonly cocktailModel = cocktailModel;

  public async createCocktail(
    cocktailCreateDto: CocktailCreateReqDto,
  ): Promise<ICocktail | null> {
    const data: ICocktail | null = await this.cocktailModel.create({
      ...cocktailCreateDto,
    });
    return data;
  }

  public async getCocktail(recipeGetDto: number): Promise<ICocktail | null> {
    const cocktailId = recipeGetDto;

    const data = await this.cocktailModel.findOne(cocktailId);

    return data;
  }
}

export default CocktailService;
