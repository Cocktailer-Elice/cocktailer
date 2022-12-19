import { Cocktail } from '../../services/types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import CocktailSchema from '../schemas/cocktailSchema';

interface CocktailInterface {
  create(cocktailCreateDto: CocktailCreateReqDto): Promise<Cocktail | null>;
  findAll(): Promise<Cocktail[]>;
  findOne(cocktailId: number): Promise<Cocktail | null>;
}

export class CocktailModel implements CocktailInterface {
  async create(
    cocktailCreateDto: CocktailCreateReqDto,
  ): Promise<Cocktail | null> {
    const newMyCocktail = await CocktailSchema.create(cocktailCreateDto);

    return newMyCocktail;
  }

  async findAll(): Promise<Cocktail[]> {
    const myCocktail: Cocktail[] = await CocktailSchema.find({}, '-_id -__v');

    return myCocktail;
  }

  async findOne(cocktailId: number): Promise<Cocktail | null> {
    const myCocktail = await CocktailSchema.findOne(
      { id: cocktailId },
      '-_id -__v',
    );

    return myCocktail;
  }
}

const cocktailModel = new CocktailModel();

export { CocktailInterface, cocktailModel };
