import { CocktailServiceType, CocktailRankings } from './types';
import { Rankings } from 'types';
//추가됨//
import { IUser } from '../db/types';
/////////
import { cocktailModel } from '../db';
import { AppError } from '../appError';
import { errorNames } from '../errorNames';

class CocktailService {
  private readonly cocktailModel = cocktailModel;

  public async getHomeCocktailAndUserList(): Promise<Rankings> {
    const data: Rankings =
      await this.cocktailModel.getHomeCocktailAndUserList();
    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '칵테일 / 유저랭킹 조회실패!',
      );
    }
    return data;
  }

  public async createCocktail(
    cocktailCreateDto: CocktailServiceType,
  ): Promise<number> {
    const name: string[] = [];
    const brand: string[] = [];
    const volume: number[] = [];

    const alcohol: any = {
      name: name,
      brand: brand,
      volume: volume,
    };

    const ingredient: any = {
      brand: brand,
      volume: volume,
    };

    const alcoholMap = Object.keys(cocktailCreateDto.ratio.alcohol);
    const ingredientMap = Object.keys(cocktailCreateDto.ratio.ingredient);

    alcoholMap.map((e1) => {
      name.push(e1);
      const obj1 = cocktailCreateDto.ratio.alcohol[e1];
      obj1.map((e2, idx2) => {
        brand.push(String(Object.keys(e2)));
        volume.push(Number(Object.values(e2)));
      });
      alcohol.brand = brand;
      alcohol.volume = volume;
    });

    console.log('aaa', alcohol);

    ingredientMap.map((e1) => {
      name.push(e1);
      const obj1 = cocktailCreateDto.ratio.ingredient[e1];
      obj1.map((e2, idx2) => {
        brand.push(String(Object.keys(e2)));
        volume.push(Number(Object.values(e2)));
      });
      ingredient.brand = brand;
      ingredient.volume = volume;
    });

    console.log('iii', ingredient);

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

  public async updateCocktail(
    cocktailId: number,
    updateCocktail: CocktailServiceType,
  ) {
    const data: any = await this.cocktailModel.updateCocktail(
      cocktailId,
      updateCocktail,
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

  public async deleteCocktail(cocktailId: number) {
    const data: number = await this.cocktailModel.deleteCocktail(cocktailId);
    if (data === 0) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '이런! 이 칵테일은 누군가 다 마셨나봐요!! 삭제하실 정보가 없어요!',
      );
    }

    return '칵테일을 삭제했습니다.';
  }

  public async cocktailLikes(userId: number, cocktailId: number) {
    const data: any = await this.cocktailModel.cocktailLikes(
      userId,
      cocktailId,
    );
    return 'success';
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
