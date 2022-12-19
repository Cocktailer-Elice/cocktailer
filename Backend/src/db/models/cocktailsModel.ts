import { Cocktail } from '../../services/types/cocktailType';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
//import { cocktailsQuery } from './queries/cocktailsQuery';
import CocktailSchema from '../schemas/cocktailsSchema';

interface CocktailInterface {
  create(cocktailCreateDto: CocktailCreateReqDto): Promise<Cocktail | null>;
  findAll(queries: string): Promise<Cocktail[]>;
  findOne(
    cocktailId: number | string,
    category: string,
  ): Promise<Cocktail | Cocktail[]>;
}

export class CocktailModel implements CocktailInterface {
  async create(
    cocktailCreateDto: CocktailCreateReqDto,
  ): Promise<Cocktail | null> {
    const newMyCocktail = await CocktailSchema.create(cocktailCreateDto);

    return newMyCocktail;
  }

  async findAll(queries: string): Promise<Cocktail[]> {
    const cocktails: Cocktail[] = await CocktailSchema.aggregate([
      {
        $facet: {
          sweet: [
            {
              $match: {
                category: 'sweet',
              },
            },
            {
              $limit: 6,
            },
            {
              $sort: {
                createdAt: -1,
              },
            },
          ],
          dry: [
            {
              $match: {
                category: 'dry',
              },
            },
            {
              $limit: 6,
            },
            {
              $sort: {
                createdAt: -1,
              },
            },
          ],
          refreshing: [
            {
              $match: {
                category: 'refreshing',
              },
            },
            {
              $limit: 6,
            },
            {
              $sort: {
                createdAt: -1,
              },
            },
          ],
          fruit: [
            {
              $match: {
                category: 'fruit',
              },
            },
            {
              $limit: 6,
            },
            {
              $sort: {
                createdAt: -1,
              },
            },
          ],
          smoothie: [
            {
              $match: {
                category: 'smoothie',
              },
            },
            {
              $limit: 6,
            },
            {
              $sort: {
                createdAt: -1,
              },
            },
          ],
          hot: [
            {
              $match: {
                category: 'hot',
              },
            },
            {
              $limit: 6,
            },
            {
              $sort: {
                createdAt: -1,
              },
            },
          ],
        },
      },
    ]);

    return cocktails;
  }

  async findOne(
    cocktailId: number,
    category: string,
  ): Promise<Cocktail | Cocktail[]> {
    const idObj = { id: cocktailId };
    const categoryObj = { category: category };
    console.log(category === 'all' ? true : false);
    const cocktail = await CocktailSchema.aggregate([
      {
        $match: { category: category === 'all' ? 'refreshing' : category },
      },
    ]);
    // console.log('//////////////////////');
    // console.log(test);
    // console.log('//////////////////////');
    // const cocktail = await CocktailSchema.findOne(
    //   { id: cocktailId },
    //   '-_id -__v',
    // );

    return cocktail;
  }
}

const cocktailModel = new CocktailModel();

export { CocktailInterface, cocktailModel };
