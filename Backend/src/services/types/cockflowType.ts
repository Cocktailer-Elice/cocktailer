export interface CockflowInfo {
  owner: string;
  title: string;
  content: string;
}

export interface CockflowComment {
  _id: string;
  owner: {
    id: number;
    nickname: string;
    isBartender: boolean;
  };
  content: string;
  subComments: CockflowSubComment[];
}

export interface CockflowSubComment {
  _id: string;
  owner: {
    id: number;
    nickname: string;
    isBartender: boolean;
  };
  content: string;
  isSubComment: boolean;
  parentCommentId: string;
}

export interface GetCockflowServiceDto {
  _id: string;
  owner: number;
  title: string;
  content: string;
  comments: CockflowComment[];
  subComments?: CockflowSubComment[];
  commentsCount?: number;
}
