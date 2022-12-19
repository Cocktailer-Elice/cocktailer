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

  //

  public async getCocktail(
    id: number | null,
    category: string | null,
  ): Promise<Cocktail | Cocktail[]> {
    /*
    id x / category x / = 각 카테고리마다 n개씩
    id o / category x / = 해당 id 칵테일 가져오기
    id x / category o / = 해당 카테고리 칵테일들 전체 가져오기
    id o / category o / = 해당 id 칵테일 가져오기
    */

    //
    const data =
      id === null && category === null
        ? await this.cocktailModel.findAll('main', null, null)
        : Number.isInteger(id)
        ? await this.cocktailModel.findAll('id', id, null)
        : await this.cocktailModel.findAll('category', null, category);

    if (data === null) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 칵테일');
    }

    return data;
  }
}

export default CocktailService;
