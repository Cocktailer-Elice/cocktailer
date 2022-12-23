import { MyCockflow } from './cockflowType';

export interface CommentCreateReqDto {
  content: string;
}

export interface Comment {
  _id: string;
  owner: {
    id: number;
    nickname: string;
    isBartender: false;
  };
  content: string;
  isAdopted?: boolean;
  parentCommentId?: string;
  subComments: Comment[];
}

export interface Comments {
  comments: Comment[];
}

export interface MyComment {
  owner: number;
  content: string;
  isAdopted?: boolean;
  parentCockflow: MyCockflow[];
}
