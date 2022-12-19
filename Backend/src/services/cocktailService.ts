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
    id: number,
    category: string,
  ): Promise<Cocktail | Cocktail[]> {
    /*
    id x / category x / = 각 카테고리마다 n개씩
    id o / category x / = 해당 id 칵테일 가져오기
    id x / category o / = 해당 카테고리 칵테일들 전체 가져오기
    id o / category o / = 해당 id 칵테일 가져오기
    */
    console.log(id, category);

    console.log(Number.isNaN(id));

    console.log(category === 'undefined');

    const data =
      Number.isNaN(id) && category === 'undefined'
        ? await this.cocktailModel.findAll('main')
        : await this.cocktailModel.findOne(id, category);

    if (data === null) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 칵테일');
    }

    return data;
  }
}

export default CocktailService;
