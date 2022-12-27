import { CockgorithmServiceType, ProcessedMaterial, Material } from './types';
import { cockgorithmModel } from '../db';
import { AppError } from '../appError';
import { errorNames } from '../errorNames';

class CockgorithmService {
  private readonly cockgorithmModel = cockgorithmModel;

  public async activateCockgorithm(material: ProcessedMaterial) {
    const data = await this.cockgorithmModel.activateCockgorithm(material);

    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '죄송합니다 다시 검색해 주시기 바립니다.',
      );
    }

    return data;
  }
}
export default CockgorithmService;
