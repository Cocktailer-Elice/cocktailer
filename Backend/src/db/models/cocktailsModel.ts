import { Cocktail } from '../../services/types/cocktailType';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import CocktailSchema from '../schemas/cocktailsSchema';
import { cocktailQueries } from '../queries/cocktailsQuery';

interface CocktailInterface {
  create(cocktailCreateDto: CocktailCreateReqDto): Promise<Cocktail | null>;

  lists(): Promise<Cocktail[]>;

  findId(id: number): Promise<Cocktail[]>;

  findCategory(category: string, official: boolean | null): Promise<Cocktail[]>;

  findAll(
    queries: string,
    id: number | null,
    category: string | null,
    official: boolean | null,
  ): Promise<Cocktail[]>;
}

export class CocktailModel implements CocktailInterface {
  async create(
    cocktailCreateDto: CocktailCreateReqDto,
  ): Promise<Cocktail | null> {
    const newMyCocktail = await CocktailSchema.create(cocktailCreateDto);

    return newMyCocktail;
  }

  public lists = async (): Promise<Cocktail[]> => {
    console.log('lists사용');
    const queries = cocktailQueries(null, null, true);

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public findId = async (id: number): Promise<Cocktail[]> => {
    const queries = cocktailQueries(id, null, null);

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public findCategory = async (
    category: string,
    official: boolean | null,
  ): Promise<Cocktail[]> => {
    const queries = cocktailQueries(null, category, official);

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public findAll = async (
    queries: string,
    id: number | null,
    category: string | null,
    official: boolean | null,
  ): Promise<Cocktail[]> => {
    const result = cocktailQueries(id, category, official);
    console.log(result);

    const cocktails = await CocktailSchema.aggregate([
      Object(result),
      { projection: '-_id -__v -updatedAt -deletedAt' },
    ]);

    return cocktails;
  };
}

const cocktailModel = new CocktailModel();

export { CocktailInterface, cocktailModel };
