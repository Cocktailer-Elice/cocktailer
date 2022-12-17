import { Comment } from './commentType';

export interface CockflowCreateReqDto {
  title: string;
  content: string;
}

export interface Cockflow {
  nickname: string;
  title: string;
  content: string;
  comments: Comment[];
  createdAt: Date;
}
