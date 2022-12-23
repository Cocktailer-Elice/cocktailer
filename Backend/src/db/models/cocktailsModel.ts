import { Cocktail } from '../../services/types/cocktailType';
import { CocktailCreateReqData } from 'types';
import CocktailSchema from '../schemas/cocktailsSchema';
import {
  lists,
  findCocktailId,
  findCategoryAndSearch,
} from '../queries/cocktailsQuery';

interface CocktailInterface {
  createCocktail(cocktailCreateDto: CocktailCreateReqData): Promise<number>;

  getLists(): Promise<Cocktail[]>;

  findByUserId(userId: number): Promise<Cocktail[]>;

  findCocktailId(id: number): Promise<Cocktail | null>;

  findCocktailCategoryAndSearch(
    reqData: object,
    lastId: number,
  ): Promise<Cocktail[]>;
}

const limitEachPage = 10;

export class CocktailModel implements CocktailInterface {
  public createCocktail = async (
    cocktailCreateDto: CocktailCreateReqData,
  ): Promise<number> => {
    const newMyCocktail: Partial<Cocktail> = await CocktailSchema.create(
      cocktailCreateDto,
    );

    return Number(newMyCocktail.id);
  };

  public getLists = async (): Promise<Cocktail[]> => {
    const queries = lists();

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public findByUserId = async (userId: number): Promise<Cocktail[]> => {
    const result: Cocktail[] = await CocktailSchema.aggregate([
      {
        $match: { owner: userId },
      },
      { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
    ]);

    return result;
  };

  public findCocktailId = async (id: number): Promise<Cocktail | null> => {
    const queries = findCocktailId(id);
    console.log(queries);

    const test: Cocktail[] = await CocktailSchema.aggregate([Object(queries)]);

    const result = (await CocktailSchema.findOne({
      id: id,
    })) as Cocktail;

    return result;
  };

  public findCocktailCategoryAndSearch = async (
    reqData: object,
    endpoint: number,
  ): Promise<Cocktail[]> => {
    const queries = findCategoryAndSearch(reqData);

    const result: Cocktail[] = await CocktailSchema.aggregate([Object(queries)])
      .limit(limitEachPage)
      .skip(endpoint);

    return result;
  };

  ////////////////////////////////
  //       목데이터 생성기       //
  ////////////////////////////////

  public makeMockData = async () => {
    console.log('생성기 시작 _model');
    const result: any = {};
    const alcoholArr = [
      '진',
      '럼',
      '보드카',
      '위스키',
      '브랜디',
      '데킬라',
      '맥주',
      '와인',
      '샴페인',
      '리큐르',
      '비터스',
      '소주',
      '맥주',
    ];
    const ingredientArr = [
      '시럽',
      '주스',
      '탄산음료',
      '달걀',
      '타바스코',
      '우스터 소스',
      '소금',
      '후추',
      '꿀',
      '우유',
      '크림',
      '새우',
    ];
    const category = ['sweet', 'dry', 'refreshing', 'fruit', 'smoothie', 'hot'];
    const title = [
      '시험',
      '직장',
      '퇴근',
      '블러디',
      '스크류',
      '재미있는',
      '웃긴',
    ];
    const userId = [94, 95, 96, 97, 98, 99, 100, 101, 102];
    const flavor1 = ['씀', '쓴맛', '단맛', '인생은 달다', '달콤', '과일'];
    const flavor2 = [
      '민트맛',
      '피로회복맛',
      'sweet',
      'bitter',
      '따듯해짐',
      '추억의 맛',
    ];
    const officialBool = [true, false];

    for (let i = 0; i <= 100; i++) {
      const mockData: any = {
        owner: userId[Number(Math.floor(Math.random() * 9))],

        category: category[Number(Math.floor(Math.random() * 5))],

        name: `${title[Number(Math.floor(Math.random() * 6))]} 칵테일`,

        official: officialBool[Number(Math.floor(Math.random() * 2))],

        flavor: [
          flavor1[Number(Math.floor(Math.random() * 5))],
          flavor2[Number(Math.floor(Math.random() * 5))],
        ],

        degree: Number(Math.floor(Math.random() * 90)),

        img: 'testedURL',

        ratio: {
          alcohol: {
            [alcoholArr[Number(Math.floor(Math.random() * 12))]]: [
              { 유저입력: 123 },
              { 유저입력: 123 },
            ],
            [alcoholArr[Number(Math.floor(Math.random() * 12))]]: [
              { 유저입력: 123 },
              { 유저입력: 123 },
            ],
          },

          ingredient: {
            [ingredientArr[Number(Math.floor(Math.random() * 11))]]: [
              { 유저입력1: 123 },
              { 유저입력2: 123 },
            ],
            [ingredientArr[Number(Math.floor(Math.random() * 11))]]: [
              { 유저입력1: 123 },
              { 유저입력2: 123 },
            ],
          },
        },
        content: '이곳에 전체적인 레시피와 가니쉬를 작성',
      };

      await CocktailSchema.create(mockData);

      result[i] = mockData;
    }
    return '데이터 생성됨';
  };
}

const cocktailModel = new CocktailModel();

export { CocktailInterface, cocktailModel };
