import { checkReqBody } from './utils/checkReqBody';
import { Request as Req, Response as Res } from 'express';
import CommentService from '../services/commentService';

class CommentController {
  private readonly commentService = new CommentService();

  public createComment = async (req: Req, res: Res) => {
    const { userId } = req.user;
    const { cockflowId } = req.params;
    const commentInfo = { ...req.body, cockflowId, owner: +userId };
    const newComment = await this.commentService.createComment(commentInfo);
    res.status(201).json(newComment);
  };

  public getMyComments = async (req: Req, res: Res) => {
    const { userId } = req.user;
    const comments = await this.commentService.getMyComments(userId);
    res.status(200).json(comments);
  };

  public updateComment = async (req: Req, res: Res) => {
    const { content } = req.body;
    checkReqBody(content);
    const { commentId } = req.params;
    const { userId } = req.user;
    await this.commentService.updateComment(commentId, content, userId);
    res.sendStatus(204);
  };

  public adoptComment = async (req: Req, res: Res) => {
    const { cockflowId, commentId } = req.params;
    const { userId } = req.user;
    await this.commentService.adoptComment(+cockflowId, commentId, userId);
    res.sendStatus(204);
  };

  public deleteComment = async (req: Req, res: Res) => {
    const { commentId } = req.params;
    const { userId } = req.user;
    await this.commentService.deleteComment(commentId, userId);
    res.sendStatus(204);
  };

  public addSubcomment = async (req: Req, res: Res) => {
    const { content } = req.body;
    checkReqBody(content);
    const { cockflowId, commentId } = req.params;
    const { userId } = req.user;
    const commentInfo = {
      ...req.body,
      owner: +userId,
      cockflowId: +cockflowId,
      isSubComment: true,
      parentCommentId: commentId,
    };
    await this.commentService.addSubcomment(commentInfo);
    res.sendStatus(204);
  };
}

const commentController = new CommentController();

export { commentController };
