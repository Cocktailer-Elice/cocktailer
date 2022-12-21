import { CockflowInfo } from '../services';
import { cockflowModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';

class CockflowService {
  private readonly cockflowModel = cockflowModel.Mongo;

  public async createCockflow(cockflowInfo: CockflowInfo) {
    const newPost = await this.cockflowModel.create(cockflowInfo);
    return newPost;
  }

  public async getCockflowsByRequest(
    scroll: number,
    cockflowsPerRequest: number,
  ) {
    const maxRequest = await this.cockflowModel.getTotalRequest(
      cockflowsPerRequest,
    );
    if (scroll > maxRequest) {
      throw new AppError(errorNames.inputError, 400, '비정상적인 접근');
    }
    const cockflows = await this.cockflowModel.getByRequest(
      scroll,
      cockflowsPerRequest,
    );
    return { cockflows, maxRequest };
  }

  public async getCockflowById(cockflowId: number) {
    const foundCockflow = await this.cockflowModel.findById(cockflowId);
    if (!foundCockflow)
      throw new AppError(errorNames.inputError, 400, `존재하지 않는 칵플로우`);
    if (foundCockflow.deletedAt)
      throw new AppError(
        errorNames.resourceNotFoundError,
        400,
        '삭제된 칵플로우',
      );
    return foundCockflow;
  }

  public async deleteCockflow(cockflowId: number, userId: number) {
    const cockflow = await this.cockflowModel.findById(cockflowId);

    if (!cockflow) {
      throw new AppError(
        errorNames.resourceNotFoundError,
        400,
        '해당하는 칵플로우 없음',
      );
    }

    if (cockflow.owner !== userId) {
      throw new AppError(
        errorNames.authorizationError,
        403,
        '권한 없는 사용자',
      );
    }
    const result = await this.cockflowModel.softDelete(cockflowId);
    if (!result.acknowledged || !result.modifiedCount) {
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    }
    return;
  }
}

export default CockflowService;
