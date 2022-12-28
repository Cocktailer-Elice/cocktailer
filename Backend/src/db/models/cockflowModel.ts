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
import User from '../schemas/userSchema';
import { db } from '../../mongodb';
import { AppError } from '../../appError';
import { errorNames } from '../../errorNames';

class CockflowMongoModel implements ICockflowMongoModel {
  public async create(cockflowInfo: CockflowInfo): Promise<ICockflow> {
    const session = await db.startSession();
    try {
      session.startTransaction();
      const cockflow = await new Cockflow(cockflowInfo).save({ session });

      const updateUserFilter = { id: cockflowInfo.owner };
      await User.updateOne(updateUserFilter, { $inc: { points: 50 } }).session(
        session,
      );
      await session.commitTransaction();
      await session.endSession();
      return cockflow;
    } catch (err) {
      await session.abortTransaction();
      await session.endSession();
      throw new AppError(errorNames.databaseError);
    }
  }

  public async getByRequest(
    scroll: number,
    cockflowsPerRequest: number,
  ): Promise<ICockflow[]> {
    const filter = { deletedAt: null };
    const projection = '-_id -owner -content -deletedAt -createdAt -updatedAt';
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
    try {
      session.startTransaction();
      const cockflowDeleteFilter = { id: cockflowId };
      await Cockflow.deleteOne(cockflowDeleteFilter).session(session);

      const commentDeleteFilter = { cockflowId };
      await Comment.deleteMany(commentDeleteFilter).session(session);
      await session.commitTransaction();
      await session.endSession();
      return;
    } catch (err) {
      await session.abortTransaction();
      await session.endSession();
      throw new AppError(errorNames.databaseError);
    }
  };
}

const cockflowMongoModel = new CockflowMongoModel();

class CockflowModel implements ICockflowModel {
  constructor(public Mongo: CockflowMongoModel) {}
}

const cockflowModel = new CockflowModel(cockflowMongoModel);

export { CockflowModel, cockflowModel };
