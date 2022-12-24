import { formatCockflow } from './utils/formatCockflowUtil';
import { CockflowInfo } from '../services';
import { cockflowModel } from '../db';
import { AppError } from '../errorHandler';
import { errorNames } from '../errorNames';

class CockflowDependencies implements CockflowDependencies {
  public cockflowModel = cockflowModel.Mongo;
}

class CockflowService {
  constructor(private readonly dependencies: CockflowDependencies) {}

  public async createCockflow(cockflowInfo: CockflowInfo) {
    const newPost = await this.dependencies.cockflowModel.create(cockflowInfo);
    return newPost;
  }

  public async getCockflowsByRequest(
    scroll: number,
    cockflowsPerRequest: number,
  ) {
    const maxRequest = await this.dependencies.cockflowModel.getTotalRequest(
      cockflowsPerRequest,
    );
    if (scroll > maxRequest) {
      throw new AppError(errorNames.inputError, 400, '비정상적인 접근');
    }
    const cockflows = await this.dependencies.cockflowModel.getByRequest(
      scroll,
      cockflowsPerRequest,
    );
    return { cockflows, maxRequest };
  }

  public getMyCockflows = async (userId: number) => {
    const cockflows = await this.dependencies.cockflowModel.findByUserId(
      userId,
    );
    return cockflows;
  };

  public async getCockflowById(cockflowId: number) {
    const foundCockflow = await this.dependencies.cockflowModel.findByAggregate(
      cockflowId,
    );

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
    const cockflow = await this.dependencies.cockflowModel.findById(cockflowId);
    if (!cockflow) {
      throw new AppError(errorNames.inputError, 400, '존재하지 않는 칵플로우');
    }
    if (cockflow.owner !== userId) {
      throw new AppError(errorNames.authorizationError, 403, '권한 없는 유저');
    }
    const filter = { id: cockflowId };
    const update = { title, content };
    await this.dependencies.cockflowModel.update(filter, update);
    return;
  };

  public async deleteCockflow(cockflowId: number, userId: number) {
    const cockflow = await this.dependencies.cockflowModel.findById(cockflowId);

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
    await this.dependencies.cockflowModel.delete(cockflowId);
    return;
  }
}

const cockflowDependencies = new CockflowDependencies();

const cockflowService = new CockflowService(cockflowDependencies);

export default cockflowService;
