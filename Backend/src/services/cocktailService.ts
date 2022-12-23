import { Cocktail } from './types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import { cocktailModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';

class CocktailService {
  private readonly cocktailModel = cocktailModel;

  public async createCocktail(
    cocktailCreateDto: CocktailCreateReqDto,
  ): Promise<number> {
    const data: number = await this.cocktailModel.createCocktail({
      ...cocktailCreateDto,
    });
    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '검색하신 칵테일이 존재하지 않아요!',
      );
    }

    return data;
  }

  public async getLists() {
    const data: Cocktail[] = await this.cocktailModel.getLists();

    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '검색하신 칵테일이 존재하지 않아요!',
      );
    }

    return data;
  }

  public async findByUserId(userId: number) {
    const data = await this.cocktailModel.findByUserId(userId);

    return data;
  }

  public async findCocktailId(id: number) {
    const data = await this.cocktailModel.findCocktailId(id);

    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '이런! 이 칵테일은 누군가 다 마셨나봐요!!',
      );
    }

    return data;
  }

  public async findCocktailCategoryAndSearch(
    reqData: object,
    endpoint: number,
  ) {
    const data = await this.cocktailModel.findCocktailCategoryAndSearch(
      reqData,
      endpoint,
    );

    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '이런! 이 칵테일은 누군가 다 마셨나봐요!!',
      );
    }

    return data;
  }

  ////////////////////////////////
  //       목데이터 생성기       //
  ////////////////////////////////

  public async makeMockData() {
    console.log('생성기 시작 _service');
    const result: any = await this.cocktailModel.makeMockData();
    return result;
  }
}

export default CocktailService;
