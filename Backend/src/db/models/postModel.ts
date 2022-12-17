import { IPost, PostInfo } from '../types';
import Post from '../schemas/postSchema';

interface IPostModel {
  create(postInfo: PostInfo): Promise<IPost>;
  findByPostId(postId: string): Promise<IPost[]>;
  findById(postId: string): Promise<IPost | null>;
}

export class PostModel implements IPostModel {
  async create(postInfo: PostInfo): Promise<IPost> {
    const newPost = await Post.create(postInfo);
    return newPost;
  }

  async findByPostId(postId: string): Promise<IPost[]> {
    const posts: IPost[] = await Post.find({ owner: postId }, '-_id -__v');
    return posts;
  }

  async findById(postId: string): Promise<IPost | null> {
    const post = await Post.findOne({ id: postId }, '-_id -__v');
    return post;
  }
}

const postModel = new PostModel();

export { IPostModel, postModel };
