import { CocktailServiceType } from './types';

import { cocktailModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';

class CocktailService {
  private readonly cocktailModel = cocktailModel;

  public async createCocktail(
    cocktailCreateDto: CocktailServiceType,
  ): Promise<number> {
    const name: string[] = [];
    const brand: string[] = [];
    const volume: number[] = [];

    const alcohol: object = {
      name: name,
      brand: brand,
      volume: volume,
    };

    const ingredient: any = {
      brand: brand,
      volume: volume,
    };

    const key1 = Object.keys(cocktailCreateDto.ratio.alcohol);

    const key2 = key1.map((e1) => {
      ingredient.name = e1;
      console.log(e1);
      const obj1 = cocktailCreateDto.ratio.alcohol[e1];
      console.log(obj1);
      obj1.map((e2, idx2) => {
        ingredient.brand = String(Object.keys(e2));
        ingredient.volume = Number(Object.values(e2));
        console.log(e2);
      });
    });

    console.log(alcohol);
    console.log(ingredient);

    const data: number = await this.cocktailModel.createCocktail({
      ...cocktailCreateDto,
    });

    if (!data) {
      throw new AppError(errorNames.noDataError, 400, '칵테일 생성 실패!');
    }

    return data;
  }

  public async getLists() {
    const data: CocktailServiceType[] = await this.cocktailModel.getLists();

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
        '이런! 이 칵테일은 누군가 다 마셨나봐요!! 검색하신 정보가 없어요!',
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
