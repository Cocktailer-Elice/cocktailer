import { Cocktail } from '../../services/types/cocktailType';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import CocktailSchema from '../schemas/cocktailsSchema';
import { cocktailQueries } from '../queries/cocktailsQuery';

interface CocktailInterface {
  create(cocktailCreateDto: CocktailCreateReqDto): Promise<number>;

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
  async create(cocktailCreateDto: CocktailCreateReqDto): Promise<number> {
    const newMyCocktail: Partial<Cocktail> = await CocktailSchema.create(
      cocktailCreateDto,
    );

    return Number(newMyCocktail.id);
  }

  public lists = async (): Promise<Cocktail[]> => {
    const queries = cocktailQueries({ official: true });

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public findId = async (id: number): Promise<Cocktail[]> => {
    const queries = cocktailQueries({ id: id });

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public findCategory = async (
    category: string,
    official: true | false,
  ): Promise<Cocktail[]> => {
    const queries = cocktailQueries({
      category: category,
      official: official,
    });

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public async search(
    keyword: string,
    category: string,
    official: boolean,
  ): Promise<Cocktail[]> {
    const queries = cocktailQueries({
      keyword: keyword,
      category: category,
      official: official,
    });

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  }

  /* 아래 내용 이제 안쓸듯 */
  public findAll = async (
    queries: string,
    id: number | null,
    category: string | null,
    official: boolean | null,
  ): Promise<Cocktail[]> => {
    const result = cocktailQueries({
      id: id,
      category: category,
      official: official,
    });
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
