import { ICockflowMongoModel, ICockflowModel } from './../types/cockflowType';
import { CockflowInfo } from '../../services';
import { ICockflow } from '../types';
import Cockflow from '../schemas/cockflowSchema';

class MongoModel implements ICockflowMongoModel {
  public async create(cockflowInfo: CockflowInfo): Promise<ICockflow> {
    const newcockflow = await Cockflow.create(cockflowInfo);
    return newcockflow;
  }

  public async getByRequest(
    request: number,
    cockflowsPerRequest: number,
  ): Promise<ICockflow[]> {
    const filter = { deletedAt: null };
    const option = { sort: { createdAt: -1 } };
    const cockflows = await Cockflow.find(filter, {}, option)
      .skip((request - 1) * cockflowsPerRequest)
      .limit(cockflowsPerRequest);
    return cockflows;
  }

  public async getTotalRequest(cockflowsPerRequest: number) {
    const filter = { deletedAt: null };
    const cockflowsCount = await Cockflow.countDocuments(filter);
    const totalPage = Math.ceil(cockflowsCount / cockflowsPerRequest);
    return totalPage;
  }

  public async findByUserId(userId: string): Promise<ICockflow[]> {
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

  public async findById(cockflowId: string): Promise<ICockflow | null> {
    const filter = { id: cockflowId };
    const projection = '-_id -__v -updatedAt';
    const cockflow = await Cockflow.findOne(filter, projection);
    return cockflow;
  }

  public async softDelete(cockflowId: string) {
    const filter = { id: cockflowId };
    const update = { deletedAt: Date.now() };
    const result = await Cockflow.updateOne(filter, update);
    return result;
  }
}

export class CockflowModel implements ICockflowModel {
  Mongo = new MongoModel();
}

const cockflowModel = new CockflowModel();

export { ICockflowModel, cockflowModel };
