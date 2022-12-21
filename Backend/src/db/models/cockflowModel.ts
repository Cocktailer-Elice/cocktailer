import { GetCockflowServiceDto } from './../../services/types/cockflowType';
import { cockflowQueries } from './../queries/cockflowQuery';
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

  public findById = async (
    cockflowId: number,
  ): Promise<GetCockflowServiceDto> => {
    const cockflow = await Cockflow.aggregate(
      cockflowQueries.findById(cockflowId),
    );
    return cockflow[0];
  };

  public async softDelete(cockflowId: number) {
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
