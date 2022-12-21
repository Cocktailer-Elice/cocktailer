export interface CommentInfo {
  owner: number;
  cockflowId: string;
  content: string;
}

export interface SubCommentInfo {
  owner: number;
  cockflowId: string;
  content: string;
  isSubcomment: boolean;
  parentCommentId: string;
}
