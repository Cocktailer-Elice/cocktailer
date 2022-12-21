import { Comment } from './commentType';

export interface CockflowCreateReqDto {
  title: string;
  content: string;
}

interface CockflowPreview {
  cockflowId: string;
  title: string;
}

export interface GetCockflowsResData {
  cockflows: CockflowPreview[];
  maxRequest: number;
}

export interface CockflowGetResData {
  owner: {
    id: number;
    nickname: string;
    isBartender: boolean;
  };
  title: string;
  content: string;
  createdAt: Date;
  comments: Comment[];
}
