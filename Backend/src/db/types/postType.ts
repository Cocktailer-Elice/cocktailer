export interface IPost {
  id: string;
  owner: string;
  title: string;
  content: string;
  comments: string[];
}

export interface PostInfo {
  owner: string;
  title: string;
  content: string;
}
