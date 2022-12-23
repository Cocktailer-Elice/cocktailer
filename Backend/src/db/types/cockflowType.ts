import { GetCockflowServiceDto } from './../../services/types/cockflowType';
import { CockflowInfo } from 'Backend/src/services';
import { UpdateWriteOpResult, AnyExpression } from 'mongoose';

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
  findByAggregate(cockflowId: number): Promise<GetCockflowServiceDto>;
  findById(cockflowId: number): Promise<ICockflow | null>;
  update(
    filter: CockflowFindOneFilter,
    update: CockflowUpdateOneFilter,
  ): Promise<UpdateWriteOpResult>;
  delete(cockflowId: number): Promise<AnyExpression>;
}

export interface CockflowFindOneFilter {
  id: number;
}

export interface CockflowUpdateOneFilter {
  title: string;
  content: string;
}

export interface ICockflow {
  id: string;
  owner: number;
  title: string;
  content: string;
  deletedAt: Date | null;
}
