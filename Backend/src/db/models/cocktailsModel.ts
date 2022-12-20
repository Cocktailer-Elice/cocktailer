import { Cocktail } from '../../services/types/cocktailType';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import CocktailSchema from '../schemas/cocktailsSchema';
import { cocktailQueries } from '../queries/cocktailsQuery';

interface CocktailInterface {
  create(cocktailCreateDto: CocktailCreateReqDto): Promise<Cocktail | null>;

  lists(): Promise<Cocktail[]>;
  findAll(
    queries: string,
    id: number | null,
    category: string | null,
    official: string | null,
  ): Promise<Cocktail[]>;

  // findOne(
  //   cocktailId: number | string,
  //   category: string,
  // ): Promise<Cocktail | Cocktail[]>;
}

export class CocktailModel implements CocktailInterface {
  async create(
    cocktailCreateDto: CocktailCreateReqDto,
  ): Promise<Cocktail | null> {
    const newMyCocktail = await CocktailSchema.create(cocktailCreateDto);

    return newMyCocktail;
  }

  public lists = async (): Promise<Cocktail[]> => {
    const queries = cocktailQueries('main', null, null, 'true');

    console.log(queries);

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
      // {
      //   $facet: {
      //     sweet: [
      //       { $match: { category: 'sweet', official: true } },
      //       { $limit: 6 },
      //       { $sort: { createdAt: -1 } },
      //       { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
      //     ],
      //     dry: [
      //       { $match: { category: 'dry', official: true } },
      //       { $limit: 6 },
      //       { $sort: { createdAt: -1 } },
      //       { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
      //     ],
      //     refreshing: [
      //       { $match: { category: 'refreshing', official: true } },
      //       { $limit: 6 },
      //       { $sort: { createdAt: -1 } },
      //       { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
      //     ],
      //     fruit: [
      //       { $match: { category: 'fruit', official: true } },
      //       { $limit: 6 },
      //       { $sort: { createdAt: -1 } }, //likes 생성일자 filter
      //       { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
      //     ],
      //     smoothie: [
      //       { $match: { category: 'smoothie', official: true } },
      //       { $limit: 6 },
      //       { $sort: { createdAt: -1 } },
      //       { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
      //     ],
      //     hot: [
      //       { $match: { category: 'hot', official: true } },
      //       { $limit: 6 },
      //       { $sort: { createdAt: -1 } },
      //       { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
      //     ],
      //     userCocktail: [
      //       { $match: { official: false, likes: { $gt: 25 } } },
      //       { $limit: 6 },
      //       { $sort: { createdAt: -1 } },
      //       { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
      //     ],
      //   },
      // },
    ]);
    return result;
  };

  public findAll = async (
    queries: string,
    id: number | null,
    category: string | null,
    official: string | null,
  ): Promise<Cocktail[]> => {
    const result = cocktailQueries(queries, id, category, official);
    console.log(result);

    const cocktails = await CocktailSchema.aggregate([
      Object(result),
      { projection: '-_id -__v -updatedAt -deletedAt' },
    ]);

    return cocktails;
  };

  // async findOne(
  //   cocktailId: number,
  //   category: string,
  // ): Promise<Cocktail | Cocktail[]> {
  //   const idObj = { id: cocktailId };
  //   const categoryObj = { category: category };
  //   console.log(category === 'all' ? true : false);
  //   const cocktail = await CocktailSchema.aggregate([
  //     {
  //       $match: { category: category === 'all' ? 'refreshing' : category },
  //     },
  //   ]);
  // console.log('//////////////////////');
  // console.log(test);
  // console.log('//////////////////////');
  // const cocktail = await CocktailSchema.findOne(
  //   { id: cocktailId },
  //   '-_id -__v',
  // );

  //return cocktail;
  //}
}

const cocktailModel = new CocktailModel();

export { CocktailInterface, cocktailModel };
