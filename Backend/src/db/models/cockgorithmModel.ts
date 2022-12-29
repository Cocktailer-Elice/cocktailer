import { CockgorithmModelType, CocktailModelType, Material } from '../types';
import { findByCockgorithm } from '../queries/cockgorithmQuery';

import CocktailSchema from '../schemas/cocktailsSchema';

interface CockgorithmInterface {
  activateCockgorithm(material: Material): Promise<CockgorithmModelType[]>;
}

export class CockgorithmModel implements CockgorithmInterface {
  public activateCockgorithm = async (
    material: Material,
  ): Promise<CocktailModelType[]> => {
    const { alcohol, category } = material;
    const filterMinDegree = material.minDegree - 5;
    const filterMaxDegree = material.maxDegree + 5;

    const cocktails: CocktailModelType[] = await CocktailSchema.aggregate(
      findByCockgorithm(category, filterMinDegree, filterMaxDegree, alcohol),
    );
    return cocktails;
  };
}

const cockgorithmModel = new CockgorithmModel();

export { CockgorithmInterface, cockgorithmModel };
