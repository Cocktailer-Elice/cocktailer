import { cockflowQueries } from './../queries/cockflowQuery';
import {
  ICockflowMongoModel,
  ICockflowModel,
  CockflowFindOneFilter,
  CockflowUpdateOneFilter,
} from './../types/cockflowType';
import { CockflowInfo, GetCockflowServiceDto } from '../../services';
import { ICockflow } from '../types';
import Cockflow from '../schemas/cockflowSchema';
import Comment from '../schemas/commentSchema';
import db from '../../mongodb';

class MongoModel implements ICockflowMongoModel {
  public async create(cockflowInfo: CockflowInfo): Promise<ICockflow> {
    const cockflow = await Cockflow.create(cockflowInfo);
    return cockflow;
  }

  public async getByRequest(
    scroll: number,
    cockflowsPerRequest: number,
  ): Promise<ICockflow[]> {
    const filter = { deletedAt: null };
    const projection = '-_id -owner -title -deletedAt -createdAt -updatedAt';
    const option = { sort: { createdAt: -1 } };
    const cockflows = await Cockflow.find(filter, projection, option)
      .skip((scroll - 1) * cockflowsPerRequest)
      .limit(cockflowsPerRequest);
    return cockflows;
  }

  public async getTotalRequest(cockflowsPerRequest: number) {
    const filter = { deletedAt: null };
    const cockflowsCount = await Cockflow.countDocuments(filter);
    const totalRequest = Math.ceil(cockflowsCount / cockflowsPerRequest);
    return totalRequest;
  }

  public async findByUserId(userId: number): Promise<ICockflow[]> {
    const filter = { owner: userId };
    const projection = '-_id -__v -updatedAt -deletedAt';
    const option = { sort: { createdAt: -1 } };
    const cockflows: ICockflow[] = await Cockflow.find(
      filter,
      projection,
      option,
    );
    return cockflows;
  }

  public findByAggregate = async (
    cockflowId: number,
  ): Promise<GetCockflowServiceDto> => {
    const cockflow = await Cockflow.aggregate(
      cockflowQueries.findById(cockflowId),
    );
    return cockflow[0];
  };

  public findById = async (cockflowId: number): Promise<ICockflow | null> => {
    const cockflow = await Cockflow.findOne({ id: cockflowId });
    return cockflow;
  };

  public update = async (
    filter: CockflowFindOneFilter,
    update: CockflowUpdateOneFilter,
  ) => {
    const result = await Cockflow.updateOne(filter, update);
    return result;
  };

  public delete = async (cockflowId: number) => {
    const session = await db.startSession();
    session.startTransaction();
    console.log('세션 및 트랜잭션이 정상적으로 시작됨');

    const cockflowDeleteFilter = { id: cockflowId };
    await Cockflow.deleteOne(cockflowDeleteFilter).session(session);
    console.log('세션 중 칵플로우 삭제 완료');

    const commentDeleteFilter = { cockflowId };
    await Comment.deleteMany(commentDeleteFilter).session(session);
    console.log('세션 중 코멘트 삭제 완료');
    await session.abortTransaction();
    const result = await session.commitTransaction();
    console.log(result);
    console.log('세션이 정상적으로 커밋됨');
    session.endSession();
    return;
  };
}

export class CockflowModel implements ICockflowModel {
  Mongo = new MongoModel();
}

const cockflowModel = new CockflowModel();

export { ICockflowModel, cockflowModel };
