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
  nickname: string;
  adopted: boolean;
  // subComments: subComments[]; 대댓글은 추가 기능으로 일단 보류
}

export interface Comments {
  comments: Comment[];
}
