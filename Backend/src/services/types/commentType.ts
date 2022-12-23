export interface SubCommentInfo {
  owner: number;
  cockflowId: string;
  content: string;
  parentCommentId: string;
}

export interface CommentInfo {
  owner: number;
  cockflowId: string;
  content: string;
}

export interface SubCommentCreateDto {
  owner: number;
  cockflowId: string;
  content: string;
  isSubcomment: boolean;
  parentCommentId: string;
}
