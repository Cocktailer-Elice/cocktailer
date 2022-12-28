import { Request as Req, Response as Res } from 'express';
import mailingEvents from '../events/mailingEvent';
import { redisCache } from '../redis';
import userService from '../services/userService';
import { checkReqBody, createCookie, updateToken } from './utils';

class UserController {
  private readonly userService = userService;

  public getMyPosts = async (req: Req, res: Res) => {
    const { userId } = req.user;
    const myPosts = await this.userService.getMyPosts(userId);
    res.status(200).json(myPosts);
  };

  public getMyLikes = async (req: Req, res: Res) => {
    const { userId } = req.user;
    const myLikes = await this.userService.getMyLikes(userId);
    res.status(200).json(myLikes);
  };

  public findUserEmail = async (req: Req, res: Res) => {
    const { name, tel } = req.body;
    checkReqBody(name, tel);
    const foundEmail = await this.userService.findUserEmail(name, tel);
    res.status(200).json({ email: foundEmail });
  };

  public verifyUser = async (req: Req, res: Res) => {
    const { name, email, tel } = req.body;
    checkReqBody(name, email, tel);
    const temporaryPassword = await this.userService.verifyUser(
      name,
      email,
      tel,
    );
    res.sendStatus(204);
    mailingEvents.emit('temporaryPasswordIssued', email, temporaryPassword);
  };

  public sendCode = async (req: Req, res: Res) => {
    const { tel } = req.body;
    checkReqBody(tel);
    await this.userService.sendCode(tel);
    res.sendStatus(204);
  };

  public changePassword = async (req: Req, res: Res) => {
    const { password, newPassword } = req.body;
    checkReqBody(password, newPassword);
    const { userId } = req.user;
    await this.userService.changePassword(userId, password, newPassword);
    res.sendStatus(204);
  };

  public updateUserProfile = async (req: Req, res: Res) => {
    const { avatarUrl } = req.body;
    const { userId } = req.user;
    checkReqBody(avatarUrl);
    await this.userService.updateUserProfile(userId, avatarUrl);
    const userIdString = req.cookies.Authorization.split('/')[1];
    const originalCookie = req.user;
    const token = updateToken(originalCookie, avatarUrl);
    const isAutoLogin = (await redisCache.exists(userIdString)) ? true : false;
    const cookie = createCookie(token, userIdString, isAutoLogin);
    res.setHeader('Set-Cookie', [cookie]);
    res.sendStatus(204);
  };

  public updateUserState = async (req: Req, res: Res) => {
    const { userId } = req.user;
    await this.userService.updateUserState(userId);
    res.sendStatus(204);
  };

  public softDeleteUser = async (req: Req, res: Res) => {
    const { userId, name, email } = req.user;
    await this.userService.softDeleteUser(userId);
    res.setHeader('Set-Cookie', 'Authorization=; Max-age=0; path=/');
    res.sendStatus(204);
    mailingEvents.emit('userSeceded', name, email);
  };
}

const userController = new UserController();

export { userController };
