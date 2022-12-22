import { Cocktail } from '../../services/types/cocktailType';

import CocktailSchema from '../schemas/cocktailsSchema';

interface CockgorithmInterface {
  activateCockgorithm(material: any): Promise<Cocktail[]>;
}

export class CockgorithmModel implements CockgorithmInterface {
  public activateCockgorithm = async (material: any): Promise<Cocktail[]> => {
    // material 을 사용할것!!

    console.log(material);

    //////////////////////////////////////////
    ///////////// 아래 임시 로직 //////////////
    //////////////////////////////////////////

    const count: number = await CocktailSchema.find({}).count();

    const rnd: number = Math.floor(Math.random() * count);

    const result: Cocktail[] = await CocktailSchema.aggregate([
      { $match: { id: rnd } },
    ]);

    return result;
  };
}

const cockgorithmModel = new CockgorithmModel();

export { CockgorithmInterface, cockgorithmModel };
