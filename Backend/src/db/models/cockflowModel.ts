import { ICockflow, CockflowInfo } from '../types';
import Cockflow from '../schemas/cockflowSchema';
import { UpdateWriteOpResult } from 'mongoose';

interface ICockflowModel {
  create(postInfo: CockflowInfo): Promise<ICockflow>;
  getByRequest(
    request: number,
    cockflowsPerRequest: number,
  ): Promise<ICockflow[]>;
  findByUserId(postId: string): Promise<ICockflow[]>;
  findById(postId: string): Promise<ICockflow | null>;
  softDelete(cockflowId: string): Promise<UpdateWriteOpResult>;
}

export class CockflowModel implements ICockflowModel {
  public async create(postInfo: CockflowInfo): Promise<ICockflow> {
    const newPost = await Cockflow.create(postInfo);
    return newPost;
  }

  public async getByRequest(
    request: number,
    cockflowsPerRequest: number,
  ): Promise<ICockflow[]> {
    const cockflows = await Cockflow.find({ deletedAt: null })
      .skip((request - 1) * cockflowsPerRequest)
      .limit(cockflowsPerRequest);
    return cockflows;
  }

  public async getTotalRequest(cockflowsPerRequest: number) {
    const cockflowsCount = await Cockflow.countDocuments({ deletedAt: null });
    const totalPage = Math.ceil(cockflowsCount / cockflowsPerRequest);
    return totalPage;
  }

  public async findByUserId(userId: string): Promise<ICockflow[]> {
    const posts: ICockflow[] = await Cockflow.find(
      { owner: userId },
      '-_id -__v -updatedAt -deletedAt',
    );
    return posts;
  }

  public async findById(cockflowId: string): Promise<ICockflow | null> {
    const cockflow = await Cockflow.findOne(
      { id: cockflowId },
      '-_id -__v -updatedAt',
    );
    return cockflow;
  }

  public async softDelete(cockflowId: string) {
    const filter = { id: cockflowId };
    const update = { deletedAt: Date.now() };
    const result = await Cockflow.updateOne(filter, update);
    return result;
  }
}

const cockflowModel = new CockflowModel();

export { ICockflowModel, cockflowModel };
