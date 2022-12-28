import { ProcessedMaterial } from './types';
import { cockgorithmModel } from '../db';

class CockgorithmService {
  private readonly cockgorithmModel = cockgorithmModel;

  public activateCockgorithm = async (material: ProcessedMaterial) => {
    const data = await this.cockgorithmModel.activateCockgorithm(material);
    // const pickedCocktail = this.pickRandomCocktail(data);
    return data;
  };

  private pickRandomCocktail = (cocktails: string) => {
    // 아예 없음

    // 완벽히 일치

    // 일치하는 데이터 없음

    return;
  };
}
export default CockgorithmService;
