import { Comment } from './commentType';

export interface CockflowCreateReqDto {
  title: string;
  content: string;
}

export interface CockflowUpdateReqDto extends CockflowCreateReqDto {
  id: string;
}

export interface Cockflow {
  nickname: string;
  title: string;
  content: string;
  comments: Comment[];
  createdAt: Date;
}
