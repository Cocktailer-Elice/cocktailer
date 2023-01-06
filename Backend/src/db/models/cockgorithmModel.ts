import { CockgorithmModelType, Material } from '../types';
import { findByCockgorithm } from '../queries/cockgorithmQuery';

import CocktailSchema from '../schemas/cocktailsSchema';

interface CockgorithmInterface {
  activateCockgorithm(material: Material): Promise<CockgorithmModelType[]>;
}

export class CockgorithmModel implements CockgorithmInterface {
  public activateCockgorithm = async (material: Material) => {
    const { alcohol, category } = material;
    const filterMinDegree = material.minDegree - 10;
    const filterMaxDegree = material.maxDegree + 10;
    const [beverage, ingredient] = material.ingredients;

    const cocktails = await CocktailSchema.aggregate(
      findByCockgorithm(
        category,
        filterMinDegree,
        filterMaxDegree,
        alcohol,
        beverage,
        ingredient,
      ),
    );
    return cocktails;
  };
}

const cockgorithmModel = new CockgorithmModel();

export { CockgorithmInterface, cockgorithmModel };
