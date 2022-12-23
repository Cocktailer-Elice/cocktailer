import { formatCockflow } from './utils/formatCockflowUtil';
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
    const foundCockflow = await this.cockflowModel.findByAggregate(cockflowId);

    if (!foundCockflow) {
      throw new AppError(errorNames.inputError, 400, `존재하지 않는 칵플로우`);
    }

    return formatCockflow(foundCockflow);
  }

  public updateCockflow = async (
    title: string,
    content: string,
    cockflowId: number,
    userId: number,
  ) => {
    const cockflow = await this.cockflowModel.findById(cockflowId);
    if (!cockflow) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 칵플로우');
    }
    if (cockflow.owner !== userId) {
      throw new AppError(errorNames.authorizationError, 403, '권한 없는 유저');
    }
    const filter = { id: cockflowId };
    const update = { title, content };
    await this.cockflowModel.update(filter, update);
    return;
  };

  public async deleteCockflow(cockflowId: number, userId: number) {
    const cockflow = await this.cockflowModel.findById(cockflowId);

    if (!cockflow) {
      throw new AppError(errorNames.inputError, 400, '해당하는 칵플로우 없음');
    }

    if (cockflow.owner !== userId) {
      throw new AppError(
        errorNames.authorizationError,
        403,
        '권한 없는 사용자',
      );
    }
    const result = await this.cockflowModel.delete(cockflowId);
    if (!result.acknowledged) {
      throw new AppError(errorNames.databaseError, 500, '서버 에러');
    }
    return;
  }
}

export default CockflowService;
