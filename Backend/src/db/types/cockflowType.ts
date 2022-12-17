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
  findByUserId(userId: string): Promise<ICockflow[]>;
  findById(cockflowId: string): Promise<ICockflow | null>;
  softDelete(cockflowId: string): Promise<UpdateWriteOpResult>;
}

export interface ICockflow {
  id: string;
  owner: string;
  title: string;
  content: string;
  comments: string[];
}
