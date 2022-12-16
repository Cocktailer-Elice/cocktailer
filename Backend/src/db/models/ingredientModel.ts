import { Ingredient } from '../../services/types';
import { IngredientCreateReqDto } from 'types';
import IngredientSchema from '../schemas/ingredientSchema';

interface IngredientInterface {
  create(
    ingredientCreateDto: IngredientCreateReqDto,
  ): Promise<Ingredient | null>;
  findAll(): Promise<Ingredient[]>;
  findOne(IngredientId: number): Promise<Ingredient | null>;
}

export class IngredientModel implements IngredientInterface {
  async create(
    ingredientCreateDto: IngredientCreateReqDto,
  ): Promise<Ingredient | null> {
    const newIngredient = await IngredientSchema.create(ingredientCreateDto);

    return newIngredient;
  }

  async findAll(): Promise<Ingredient[]> {
    const allIngredient: Ingredient[] = await IngredientSchema.find(
      {},
      '-_id -__v',
    );

    return allIngredient;
  }

  async findOne(ingredientId: number): Promise<Ingredient | null> {
    const selectedIngredient = await IngredientSchema.findOne(
      { id: ingredientId },
      '-_id -__v',
    );

    return selectedIngredient;
  }
}

const ingredientModel = new IngredientModel();

export { IngredientInterface, ingredientModel };
