import { Cocktail } from './types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import { cocktailModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';

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

  public async lists() {
    const data = await this.cocktailModel.lists();
    return data;
  }

  public async findId(id: number) {
    const data = await this.cocktailModel.findId(id);

    return data;
  }

  public async findCategory(category: string, official: boolean | null) {
    const data = await this.cocktailModel.findCategory(category, official);
    return data;
  }

  public async getCocktail(
    id: number | null,
    category: string | null,
    official: boolean | null,
  ): Promise<Cocktail | Cocktail[]> {
    /*
    id x / category x / = 각 카테고리마다 n개씩
    id o / category x / = 해당 id 칵테일 가져오기
    id x / category o / = 해당 카테고리 칵테일들 전체 가져오기
    id o / category o / = 해당 id 칵테일 가져오기
    */

    console.log(id, category);
    //
    const data =
      id === null && category === null
        ? await this.cocktailModel.findAll('main', null, null, official)
        : Number.isInteger(id)
        ? await this.cocktailModel.findAll('id', id, null, official)
        : await this.cocktailModel.findAll(
            'category',
            null,
            category,
            official,
          );

    //책임 분리 //반복되는 함수 : 공통으로 뽑아서 사용

    if (data === null) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 칵테일');
    }

    return data;
  }
}

export default CocktailService;
