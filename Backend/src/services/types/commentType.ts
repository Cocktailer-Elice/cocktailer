export interface CommentCreateDto {
  owner: number;
  cockflowId: string;
  content: string;
}

export interface CommentDto {
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
