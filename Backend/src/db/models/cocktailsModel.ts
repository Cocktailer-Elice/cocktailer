import { Cocktail } from '../../services/types/cocktailType';
import { CocktailCreateReqDto } from 'types';
import CocktailSchema from '../schemas/cocktailsSchema';
import { cocktailQueries } from '../queries/cocktailsQuery';

interface CocktailInterface {
  createCocktail(cocktailCreateDto: CocktailCreateReqDto): Promise<number>;

  getLists(): Promise<Cocktail[]>;

  findId(id: number): Promise<Cocktail[]>;

  findCategory(reqData: object): Promise<Cocktail[]>;

  findAll(
    queries: string,
    id: number | null,
    category: string | null,
    official: boolean | null,
  ): Promise<Cocktail[]>;
}

const limitEachPage = 10;

export class CocktailModel implements CocktailInterface {
  public createCocktail = async (
    cocktailCreateDto: CocktailCreateReqDto,
  ): Promise<number> => {
    const newMyCocktail: Partial<Cocktail> = await CocktailSchema.create(
      cocktailCreateDto,
    );

    return Number(newMyCocktail.id);
  };

  public getLists = async (): Promise<Cocktail[]> => {
    const queries = cocktailQueries({});

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

  public findCategory = async (reqData: object): Promise<Cocktail[]> => {
    const queries = cocktailQueries(reqData);

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public async search(reqData: object, p: number): Promise<Cocktail[]> {
    const queries = cocktailQueries(reqData);

    const result: Cocktail[] = await CocktailSchema.aggregate([Object(queries)])
      .limit(limitEachPage)
      .skip(p * 10);

    return result;
  }

  /*///////////////////////////////////////////////////////////////// */

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
