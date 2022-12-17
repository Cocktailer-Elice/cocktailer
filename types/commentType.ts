export interface CommentCreateReqDto {
  content: string;
}

export interface Comment {
  id: string;
  nickname: string;
  content: string;
  adopted: boolean;
  isBartender: boolean;
}

export interface Comments {
  comments: Comment[];
}
