import { Cocktail } from '../../services/types/cocktailType';
import { CocktailCreateReqDto } from 'types';
import CocktailSchema from '../schemas/cocktailsSchema';
import {
  lists,
  findCocktailId,
  findCategoryAndSearch,
} from '../queries/cocktailsQuery';

interface CocktailInterface {
  createCocktail(cocktailCreateDto: CocktailCreateReqDto): Promise<number>;

  getLists(): Promise<Cocktail[]>;

  findCocktailId(id: number): Promise<Cocktail[]>;

  findCocktailCategoryAndSearch(
    reqData: object,
    lastId: number,
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
    const queries = lists();

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

    return result;
  };

  public findCocktailId = async (id: number): Promise<Cocktail[]> => {
    const queries = findCocktailId(id);

    const result: Cocktail[] = await CocktailSchema.aggregate([
      Object(queries),
    ]);

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
}

const cocktailModel = new CocktailModel();

export { CocktailInterface, cocktailModel };
