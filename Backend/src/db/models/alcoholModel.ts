import { ICocktail } from '../../types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import Cocktail from '../schemas/cocktailSchema';

interface IAlcoholModel {
  create(cocktailCreateDto: CocktailCreateReqDto): Promise<ICocktail | null>;
  findAll(): Promise<ICocktail[]>;
  findOne(cocktailId: number): Promise<ICocktail | null>;
}

export class AlcoholModel implements IAlcoholModel {
  async create(
    recipeCreateDto: CocktailCreateReqDto,
  ): Promise<ICocktail | null> {
    const newMyRecipe = await Cocktail.create(recipeCreateDto);

    return newMyRecipe;
  }

  async findAll(): Promise<ICocktail[]> {
    const myRecipes: ICocktail[] = await Cocktail.find({}, '-_id -__v');

    return myRecipes;
  }

  async findOne(recipeId: number): Promise<ICocktail | null> {
    const myRecipe = await Cocktail.findOne({ id: recipeId }, '-_id -__v');

    return myRecipe;
  }
}

const alcoholModel = new AlcoholModel();

export { IAlcoholModel, alcoholModel };
