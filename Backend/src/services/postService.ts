import { PostInfo } from './../db/types/postType';
import { IPost, postModel } from './../db';
import { AppError, errorNames } from '../routers/middlewares';

class PostService {
  private readonly postModel = postModel;

  public async createPost(postInfo: PostInfo) {
    const newPost = await this.postModel.create(postInfo);
    return newPost;
  }

  public async getPostById(id: string): Promise<IPost | null> {
    const foundPost: IPost | null = await this.postModel.findById(id);
    if (!foundPost)
      throw new AppError(errorNames.inputError, 400, `존재하지 않는 칵플로우`);

    return foundPost;
  }
}

export default PostService;
