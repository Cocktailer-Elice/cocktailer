import { ICocktail } from '../../types';
import { CocktailCreateReqDto, CocktailGetResDto } from '../../dtos';
import Cocktail from '../schemas/cocktailSchema';

interface ICocktailModel {
  create(cocktailCreateDto: CocktailCreateReqDto): Promise<ICocktail | null>;
  findAll(): Promise<ICocktail[]>;
  findOne(cocktailId: number): Promise<ICocktail | null>;
}

export class RecipeModel implements ICocktailModel {
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

const recipeModel = new RecipeModel();

export { ICocktailModel, recipeModel };
