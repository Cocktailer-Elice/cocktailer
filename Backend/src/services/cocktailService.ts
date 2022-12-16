import { Cocktail } from './types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import { cocktailModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';
import { Collection } from 'mongoose';

/* 간결하게 작성 */
class CocktailService {
  private readonly cocktailModel = cocktailModel;

  public async createCocktail(
    cocktailCreateDto: CocktailCreateReqDto,
  ): Promise<Cocktail | null> {
    const data: Cocktail | null = await this.cocktailModel.create({
      ...cocktailCreateDto,
    });
    return data;
  }

  public async getCocktail(cocktailId: number): Promise<Cocktail | null> {
    const data = await this.cocktailModel.findOne(cocktailId);

    return data;
  }
}

export default CocktailService;
