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
  adopted: boolean;
  subComments: Comment[];
}

export interface Comments {
  comments: Comment[];
}
