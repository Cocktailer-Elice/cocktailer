import { Cocktail } from '../../services/types/cocktailType';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import CocktailSchema from '../schemas/cocktailsSchema';
import { cocktailQueries } from '../queries/cocktailsQuery';

interface CocktailInterface {
  create(cocktailCreateDto: CocktailCreateReqDto): Promise<Cocktail | null>;

  findAll(
    queries: string,
    id: number | null,
    category: string | null,
  ): Promise<Cocktail[]>;

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

  public findAll = async (
    queries: string,
    id: number | null,
    category: string | null,
  ): Promise<Cocktail[]> => {
    const res = cocktailQueries(queries, id, category);

    const cocktails = await CocktailSchema.aggregate([Object(res)]);

    return cocktails;
  };

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
