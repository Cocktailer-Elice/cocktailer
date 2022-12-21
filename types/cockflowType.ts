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
  id: number;
  owner: {
    id: number;
    nickname: string;
    isBartender: boolean;
  };
  title: string;
  content: string;
  // view: number; 조회수는 구현 예정
  createdAt: Date;
  comments: Comment[];
}
