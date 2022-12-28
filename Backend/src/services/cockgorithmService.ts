import { ProcessedMaterial } from './types';
import { cockgorithmModel } from '../db';
import { CockgorithmResData } from 'types';

class CockgorithmService {
  private readonly cockgorithmModel = cockgorithmModel;

  public activateCockgorithm = async (material: ProcessedMaterial) => {
    const data = await this.cockgorithmModel.activateCockgorithm(material);
    if (!data.length) {
      return { isFound: false };
    }
    const pickedCocktail = this.pickRandomCocktail(data, material);
    return pickedCocktail;
  };

  private pickRandomCocktail = (
    cocktails: CockgorithmResData[],
    material: ProcessedMaterial,
  ) => {
    // 완벽히 일치하는 애들 추리기
    const exactlyMatchCocktails = cocktails.filter(
      (cocktail) =>
        cocktail.degree <= material.maxDegree &&
        cocktail.degree >= material.minDegree,
    );
    // 정확히 일치하는 데이터가 없다면 전체를 대상으로
    const randomCocktails = exactlyMatchCocktails.length
      ? exactlyMatchCocktails
      : cocktails;

    const randomIndex = Math.floor(Math.random() * randomCocktails.length);
    const pickedCocktail = randomCocktails[randomIndex];
    return { data: pickedCocktail, isFound: true };
  };
}
export default CockgorithmService;
