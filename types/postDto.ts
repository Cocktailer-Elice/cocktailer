export interface PostCreateReqDto {
  title: string;
  content: string;
}

export interface PostUpdateReqDto extends PostCreateReqDto {
  id: string;
}

export interface Post {
  nickname: string;
  title: string;
  content: string;
  comments: [
    {
      nickname: string;
      title: string;
      adopted: boolean;
    },
  ];
}
