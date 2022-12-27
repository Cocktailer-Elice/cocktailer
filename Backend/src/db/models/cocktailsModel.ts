import {
  CocktailModelType,
  FindCocktailId,
  CocktailRankings,
  UserRanking,
  UpdateResult,
  LikesUser,
} from '../types';
import { CocktailCreateReqData, Rankings } from 'types';
import CocktailSchema from '../schemas/cocktailsSchema';
////추가됨///
import User from '../schemas/userSchema';
////////////
import {
  listsQuery,
  findCategoryAndSearchQuery,
  cocktailRankingsQuery,
  findCocktailIdQuery,
} from '../queries/cocktailsQuery';

import { AppError } from '../../errorHandler';
import { errorNames } from '../../errorNames';

interface CocktailInterface {
  getHomeCocktailAndUserList(): Promise<Rankings>;

  createCocktail(cocktailCreateDto: CocktailCreateReqData): Promise<number>;

  getLists(): Promise<CocktailModelType[]>;

  findByUserId(userId: number): Promise<CocktailModelType[]>;

  findCocktailId(id: number, userId: number): Promise<FindCocktailId | null>;

  findCocktailCategoryAndSearch(
    reqData: object,
    lastId: number,
  ): Promise<CocktailModelType[]>;

  updateCocktail(
    cocktailId: number,
    cocktailCreateDto: CocktailCreateReqData,
  ): Promise<UpdateResult>;

  cocktailLikes(userId: number, cocktailId: number): Promise<number>;
}

interface ReqData {
  category: string;
  official: string;
  keyword: string;
}

const limitEachPage = 10;

export class CocktailModel implements CocktailInterface {
  public getHomeCocktailAndUserList = async (): Promise<Rankings> => {
    const queries = cocktailRankingsQuery();
    const filter = { deletedAt: null, isAdmin: false };
    const projection =
      '-_id -email -name -password -birthday -tel -isAdmin -createdAt -updatedAt -deletedAt';

    const result: [CocktailRankings[], UserRanking[]] = await Promise.all([
      CocktailSchema.aggregate(Object(queries)),
      User.find(filter, projection, {
        sort: { points: -1 },
      }).limit(10),
    ]);

    const cocktailRankings = {
      ...result[0],
      img: `https://cocktailer.s3.ap-northeast-2.amazonaws.com/seeun-test/${result[0]}`,
    };

    console.log(cocktailRankings);

    return { cocktailRankings: result[0], userRankings: result[1] };
  };

  public createCocktail = async (
    cocktailCreateDto: CocktailCreateReqData,
  ): Promise<number> => {
    const newMyCocktail: CocktailModelType = await CocktailSchema.create(
      cocktailCreateDto,
    );

    return Number(newMyCocktail.id);
  };

  public getLists = async (): Promise<CocktailModelType[]> => {
    const queries = listsQuery();

    const result: CocktailModelType[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public findByUserId = async (
    userId: number,
  ): Promise<CocktailModelType[]> => {
    const result: CocktailModelType[] = await CocktailSchema.aggregate([
      {
        $match: { owner: userId },
      },
      { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
    ]);

    return result;
  };

  public findCocktailId = async (
    cocktailId: number,
    userId: number,
  ): Promise<FindCocktailId | null> => {
    const queries = findCocktailIdQuery(cocktailId);
    const findCocktail: CocktailModelType[] = await CocktailSchema.aggregate(
      Object(queries),
    );

    const cocktail = {
      ...findCocktail[0],
      img: `https://cocktailer.s3.ap-northeast-2.amazonaws.com/seeun-test/${findCocktail[0].img}`,
    };

    const liked = findCocktail[0].likesUser?.[userId]
      ? findCocktail[0].likesUser?.[userId] === true
        ? true
        : false
      : false;

    return { cocktail: cocktail, liked: liked };
  };

  public findCocktailCategoryAndSearch = async (
    reqData: ReqData,
    endpoint: number,
  ): Promise<CocktailModelType[]> => {
    const queries = findCategoryAndSearchQuery(reqData);

    const count: number = await CocktailSchema.count({
      category: reqData?.category,
    });
    console.log(count);

    const result: CocktailModelType[] = await CocktailSchema.aggregate([
      Object(queries),
    ])
      .limit(endpoint + limitEachPage)
      .skip(endpoint);

    const cocktailList: CocktailModelType[] = [];

    result.map((e) => {
      const obj = {
        ...e,
        img: `https://cocktailer.s3.ap-northeast-2.amazonaws.com/seeun-test/${e.img}`,
      };

      cocktailList.push(obj);
    });

    return cocktailList;
  };

  public updateCocktail = async (
    cocktailId: number,
    cocktailCreateDto: CocktailCreateReqData,
  ): Promise<UpdateResult> => {
    const id = { id: cocktailId };

    const result: UpdateResult = await CocktailSchema.updateOne(
      id,
      cocktailCreateDto,
    );

    console.log(result);

    return result;
  };

  public deleteCocktail = async (cocktailId: number) => {
    const result = await CocktailSchema.deleteOne({ id: cocktailId });

    return result.deletedCount;
  };

  public cocktailLikes = async (
    userId: number,
    cocktailId: number,
  ): Promise<number> => {
    const obj: LikesUser | null = await CocktailSchema.findOne(
      { id: cocktailId },
      { likes: 1, likesUser: 1, _id: 0 },
    );

    const likesUser = obj?.likesUser;

    if (!likesUser) {
      throw new AppError(
        errorNames.databaseError,
        500,
        'DB 에러입니다. 관리자에게 문의해 주세요',
      );
    }

    likesUser[userId] = likesUser[userId] === true ? false : true;

    const updateResult: UpdateResult = await CocktailSchema.updateOne(
      { id: cocktailId },
      {
        likes: likesUser[userId] === true ? obj?.likes + 1 : obj.likes - 1,
        likesUser: likesUser,
      },
    );

    return likesUser[userId] === true ? obj?.likes + 1 : obj.likes - 1;
  };

  ////////////////////////////////
  //       목데이터 생성기       //
  ////////////////////////////////

  public makeMockData = async () => {
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

        category: category[Number(Math.floor(Math.random() * 6))],

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

        likes: Number(Math.floor(Math.random() * 101)),

        likesUser: {},
      };

      await CocktailSchema.create(mockData);

      result[i] = mockData;
    }
    return '데이터 생성됨';
  };
}

const cocktailModel = new CocktailModel();

export { CocktailInterface, cocktailModel };
