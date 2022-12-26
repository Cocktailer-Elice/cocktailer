import { CocktailModelType, CocktailRankings, UserRanking } from '../types';
import { CocktailCreateReqData, Rankings } from 'types';
import CocktailSchema from '../schemas/cocktailsSchema';
////추가됨///
import { IUser } from '../types';
import User from '../schemas/userSchema';
////////////
import {
  lists,
  findCocktailId,
  findCategoryAndSearch,
  cocktailRankings,
  getCocktailLikesUser,
} from '../queries/cocktailsQuery';

interface LikesUser {
  likesUser: {
    [userId: number]: boolean;
  };
}

interface CocktailInterface {
  getHomeCocktailAndUserList(): Promise<Rankings>;

  createCocktail(cocktailCreateDto: CocktailCreateReqData): Promise<number>;

  getLists(): Promise<CocktailModelType[]>;

  findByUserId(userId: number): Promise<CocktailModelType[]>;

  findCocktailId(id: number): Promise<CocktailModelType | null>;

  findCocktailCategoryAndSearch(
    reqData: object,
    lastId: number,
  ): Promise<CocktailModelType[]>;

  updateCocktail(
    cocktailId: number,
    cocktailCreateDto: CocktailCreateReqData,
  ): Promise<any>;

  cocktailLikes(userId: number, cocktailId: number): Promise<number>;
}

const limitEachPage = 10;

export class CocktailModel implements CocktailInterface {
  public getHomeCocktailAndUserList = async (): Promise<Rankings> => {
    const queries = cocktailRankings();
    const filter = { deletedAt: null, isAdmin: false };
    const projection =
      '-_id -email -name -password -birthday -tel -isAdmin -createdAt -updatedAt -deletedAt';

    const result: [CocktailRankings[], UserRanking[]] = await Promise.all([
      CocktailSchema.aggregate(Object(queries)),
      User.find(filter, projection, {
        sort: { points: -1 },
      }).limit(10),
    ]);

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
    const queries = lists();

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
    id: number,
  ): Promise<CocktailModelType | null> => {
    const queries = findCocktailId(id);

    const test: CocktailModelType[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    console.log(test);

    const result = (await CocktailSchema.findOne({
      id: id,
    })) as CocktailModelType;

    return result;
  };

  public findCocktailCategoryAndSearch = async (
    reqData: object,
    endpoint: number,
  ): Promise<CocktailModelType[]> => {
    const queries = findCategoryAndSearch(reqData);

    const result: CocktailModelType[] = await CocktailSchema.aggregate([
      Object(queries),
    ])
      .limit(limitEachPage)
      .skip(endpoint);

    return result;
  };

  public updateCocktail = async (
    cocktailId: number,
    cocktailCreateDto: CocktailCreateReqData,
  ): Promise<any> => {
    console.log(cocktailId);
    console.log(cocktailCreateDto);
    const id = { id: cocktailId };
    const result = await CocktailSchema.updateOne(id, cocktailCreateDto);
    return result;
    //   {
    //     id: 1,
    //   },
    //   {},
    // );
  };

  public deleteCocktail = async (cocktailId: number) => {
    const result = await CocktailSchema.deleteOne({ id: cocktailId });
    console.log('res', result.deletedCount);

    return result.deletedCount;
  };

  // public CocktailLikesUser = async (userId: number, cocktailId: number) => {
  //   const queries = getCocktailLikesUser(userId, cocktailId);

  //   const result: Result[] = await CocktailSchema.aggregate(Object(queries));
  //   console.log('모델', result);
  //   console.log(typeof result[0]);

  //   return result[0];
  // };

  public cocktailLikes = async (
    userId: number,
    cocktailId: number,
  ): Promise<number> => {
    console.log(userId);
    console.log(cocktailId);

    const obj: LikesUser | null = await CocktailSchema.findOne(
      { id: cocktailId },
      { likesUser: 1, _id: 0 },
    );

    console.log(obj);

    const updateData = {
      ...obj,
      [`${userId}`]: true,
    };

    console.log(updateData);

    const update = await CocktailSchema.updateOne(
      { id: cocktailId },
      { likesUser: updateData },
    );

    // const obj: LikesUser | null = await CocktailSchema.findOne(
    //   { id: cocktailId },
    //   { likesUser: 1, _id: 0 },
    // );
    // console.log(obj);
    // if (obj?.likesUser) {
    //   obj.likesUser[`${userId}`] =
    //     obj.likesUser[`${userId}`] === false || undefined || null
    //       ? true
    //       : false;
    // }
    // console.log(obj);
    // const upthis = await CocktailSchema.updateOne({ id: cocktailId }, { obj });

    return 11;
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
