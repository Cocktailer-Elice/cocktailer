import { PostInfo } from './../db';
import { Request as Req, Response as Res } from 'express';
import PostService from '../services/postService';

class PostController {
  private readonly postService = new PostService();

  public createPost = async (req: Req, res: Res) => {
    const owner = req.user.id;
    const postInfo: PostInfo = { ...req.body, owner };
    const newPost = await this.postService.createPost(postInfo);
    res.status(200).json(newPost);
  };
}

const postController = new PostController();

export { postController };
