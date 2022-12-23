import { Cocktail } from './types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import { cockgorithmModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';

class CockgorithmService {
  private readonly cockgorithmModel = cockgorithmModel;

  public async activateCockgorithm(material: object) {
    const data: Cocktail[] = await this.cockgorithmModel.activateCockgorithm(
      material,
    );

    return data;
  }
}
export default CockgorithmService;
