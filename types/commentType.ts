import { MyCockflow } from './cockflowType';

// 답변과 댓글 공통 사용 + 수정도 동일함,,, 협의 후 그대로 사용?
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
  _id: string;
  owner: number;
  content: string;
  isAdopted?: boolean;
  parentCockflow: MyCockflow[];
}
