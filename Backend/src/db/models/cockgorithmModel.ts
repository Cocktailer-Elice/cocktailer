import { CockgorithmResData } from '../../services/types';

import CocktailSchema from '../schemas/cocktailsSchema';

interface CockgorithmInterface {
  activateCockgorithm(material: any): Promise<CockgorithmResData>;
}

export class CockgorithmModel implements CockgorithmInterface {
  public activateCockgorithm = async (
    material: any,
  ): Promise<CockgorithmResData> => {
    // material 을 사용할것!!

    console.log(material);

    //////////////////////////////////////////
    ///////////// 아래 임시 로직 //////////////
    //////////////////////////////////////////

    const count: number = await CocktailSchema.find({}).count();

    const rnd: number = Math.floor(Math.random() * count);

    const result: CockgorithmResData[] = await CocktailSchema.aggregate([
      { $match: { id: rnd } },
      {
        $project: {
          _id: 0,
          category: 0,
          flavor: 0,
          ratio: 0,
          owner: 0,
          official: 0,
          likes: 0,
          createdAt: 0,
          updatedAt: 0,
        },
      },
    ]);

    return result[0];
  };
}

const cockgorithmModel = new CockgorithmModel();

export { CockgorithmInterface, cockgorithmModel };
