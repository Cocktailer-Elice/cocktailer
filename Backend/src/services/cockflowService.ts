import { CockflowInfo } from '../db/types/cockflowType';
import { ICockflow, cockflowModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';

class CockflowService {
  private readonly cockflowModel = cockflowModel;

  public async createCockflow(cockflowInfo: CockflowInfo) {
    const newPost = await this.cockflowModel.create(cockflowInfo);
    return newPost;
  }

  public async getCockflowsByRequest(cockflowsPerRequest: number) {
    const request = await this.cockflowModel.getTotalRequest(
      cockflowsPerRequest,
    );
    const cockflows = await this.cockflowModel.getByRequest(
      request,
      cockflowsPerRequest,
    );
    return cockflows;
  }

  public async getCockflowById(cockflowId: string): Promise<ICockflow | null> {
    const foundCockflow: ICockflow | null = await this.cockflowModel.findById(
      cockflowId,
    );
    if (!foundCockflow)
      throw new AppError(errorNames.inputError, 400, `존재하지 않는 칵플로우`);

    return foundCockflow;
  }

  public async softDeleteCockflow(cockflowId: string, userId: string) {
    const cockflow = await cockflowModel.findById(cockflowId);

    if (!cockflow) {
      throw new AppError(
        errorNames.resourceNotFoundError,
        400,
        '해당하는 칵플로우 없음',
      );
    }

    if (cockflow.owner !== userId.toString()) {
      throw new AppError(
        errorNames.authorizationError,
        403,
        '권한 없는 사용자',
      );
    }
    const result = await cockflowModel.softDelete(cockflowId);
    if (!result.acknowledged) {
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    }
    return;
  }
}

export default CockflowService;
