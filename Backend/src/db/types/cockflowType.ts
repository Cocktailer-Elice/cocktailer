import { GetCockflowServiceDto } from './../../services/types/cockflowType';
import { CockflowInfo } from 'Backend/src/services';
import { UpdateWriteOpResult } from 'mongoose';

export interface ICockflowModel {
  Mongo: ICockflowMongoModel;
}

export interface ICockflowMongoModel {
  create(cockflowInfo: CockflowInfo): Promise<ICockflow>;
  getByRequest(
    request: number,
    cockflowsPerRequest: number,
  ): Promise<ICockflow[]>;
  findByUserId(userId: number): Promise<ICockflow[]>;
  findById(cockflowId: number): Promise<GetCockflowServiceDto>;
  softDelete(cockflowId: number): Promise<UpdateWriteOpResult>;
}

export interface ICockflow {
  id: string;
  owner: number;
  title: string;
  content: string;
  deletedAt: Date | null;
}
