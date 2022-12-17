import { CommentInfo } from '../services';
import { Request as Req, Response as Res } from 'express';
import CommentService from '../services/commentService';

class CommentController {
  private readonly commentService = new CommentService();

  public createComment = async (req: Req, res: Res) => {
    const owner = req.user.userId;
    const commentInfo: CommentInfo = { ...req.body, owner };
    const newComment = await this.commentService.createComment(commentInfo);
    res.status(201).json(newComment);
  };

  public getCommentsByUserId = async (req: Req, res: Res) => {
    const { userId } = req.user;
    const comments = await this.commentService.getCommentsByUserId(userId);
    res.status(200).json(comments);
  };

  public updateComment = async (req: Req, res: Res) => {
    res.sendStatus(204);
  };

  public adoptComment = async (req: Req, res: Res) => {
    const { cockflowId, commentId } = req.params;
    const { userId } = req.user;
    await this.commentService.adoptComment(cockflowId, commentId, userId);
    res.sendStatus(204);
  };

  public updateCommentLikes = async (req: Req, res: Res) => {
    const { commentId } = req.params;
    const value = req.body.like === 'like' ? 1 : -1;
    const { userId } = req.user;
    await this.commentService.updateCommentLikes(commentId, value, userId);
    res.sendStatus(204);
  };

  public deleteComment = async (req: Req, res: Res) => {
    const { commentId } = req.params;
    const { userId } = req.user;
    await this.commentService.deleteComment(commentId, userId);
    res.sendStatus(204);
  };
}

const commentController = new CommentController();

export { commentController };
