import { CockgorithmModelType } from '../types';

import CocktailSchema from '../schemas/cocktailsSchema';

interface CockgorithmInterface {
  activateCockgorithm(material: any): Promise<CockgorithmModelType>;
}

export class CockgorithmModel implements CockgorithmInterface {
  public activateCockgorithm = async (
    material: any,
  ): Promise<CockgorithmModelType> => {
    // material 을 사용할것!!

    //////////////////////////////////////////
    ///////////// 아래 임시 로직 //////////////
    //////////////////////////////////////////

    const count: number = await CocktailSchema.find({}).count();

    const rnd: number = Math.floor(Math.random() * count);

    const result: CockgorithmModelType[] = await CocktailSchema.aggregate([
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

    const formatedCocktail = {
      ...result[0],
      img: `https://cocktailer.s3.ap-northeast-2.amazonaws.com/seeun-test/${result[0].img}`,
    };

    return formatedCocktail;
  };
}

const cockgorithmModel = new CockgorithmModel();

export { CockgorithmInterface, cockgorithmModel };
