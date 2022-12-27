import { CocktailServiceType, UpdateResult } from './types';
import { Rankings } from 'types';

import { cocktailModel } from '../db';
import { AppError } from '../errorHandler';
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
    //////////////////////////////////////////////////////////////
    ////////////////////////////실험중/////////////////////////////
    //////////////////////////////////////////////////////////////

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

    console.log(ingredient);

    //////////////////////////////////////////////////////////////
    ////////////////////////////실험중/////////////////////////////
    //////////////////////////////////////////////////////////////

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

    if (data.length === 0) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '이런! 검색하신 칵테일은 누군가 다 마셨나봐요!! 검색하신 정보가 없어요!',
      );
    }

    return data;
  }

  public async updateCocktail(
    cocktailId: number,
    updateCocktail: CocktailServiceType,
  ) {
    // 트랜젝션 처리!! //
    const data: UpdateResult = await this.cocktailModel.updateCocktail(
      cocktailId,
      updateCocktail,
    );

    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '이런! 칵테일 업데이트에 실패했습니다! 잠시후 재시도 해주시거나, 관리자에게 문의하세요!',
      );
    }

    return data;
  }

  public async deleteCocktail(cocktailId: number) {
    // 트랜젝션 처리!! //
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
    // 트랜젝션 처리!! //
    const data: number = await this.cocktailModel.cocktailLikes(
      userId,
      cocktailId,
    );

    if (
      typeof data !== 'number'
      // data.acknowledged !== true &&
      // data.modifiedCount !== 1 &&
      // data.matchedCount !== 1
    ) {
      throw new AppError(errorNames.noDataError, 400, '좋아요 요청 실패!!');
    }

    //아래 user 콜렉션에 likes 누른 id 추가로직

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
