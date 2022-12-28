import { CockgorithmModelType, Material } from '../types';

import { firstSearch } from '../queries/cockgorithmQuery';

import CocktailSchema from '../schemas/cocktailsSchema';

interface CockgorithmInterface {
  activateCockgorithm(material: Material): Promise<CockgorithmModelType>;
}

export class CockgorithmModel implements CockgorithmInterface {
  public activateCockgorithm = async (
    material: Material,
  ): Promise<CockgorithmModelType> => {
    // material 을 사용할것!!

    const alcohol = `ratio.alcohol.${material.alcohol}`;
    const ingredient1 = `ratio.ingredient.${material.ingredients[0]}`;
    const ingredient2 = `ratio.ingredient.${material.ingredients[1]}`;

    //아래 주입??

    console.log(material);

    const result1: CockgorithmModelType[] = await CocktailSchema.aggregate(
      firstSearch(material),
    );

    console.log('////////////////////////////');
    console.log(result1);
    console.log('////////////////////////////');

    const formatedCocktail = {
      ...result1[0],
      img: `https://cocktailer.s3.ap-northeast-2.amazonaws.com/seeun-test/${result1[0].img}`,
    };

    return formatedCocktail;
  };
}

const cockgorithmModel = new CockgorithmModel();

export { CockgorithmInterface, cockgorithmModel };
