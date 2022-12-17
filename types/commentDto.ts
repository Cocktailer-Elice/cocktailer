export interface CommentCreateReqDto {
  postId: string;
  content: string;
}

export interface Comments {
  comments: [
    {
      nickname: string;
      content: string;
      adopted: boolean;
    },
  ];
}
