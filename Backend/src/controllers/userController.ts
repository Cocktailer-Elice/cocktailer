import { Request as Req, Response as Res } from 'express';
import UserService from '../services/userService';
import { checkReqBody } from './utils';

class UserController {
  private readonly userService = new UserService();

  public getUserById = async (req: Req, res: Res) => {
    const { userId } = req.user;
    const foundUser = await this.userService.getUserById(userId);
    res.status(200).json(foundUser.userGetResDto);
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
    await this.userService.verifyUser(name, email, tel);
    res.sendStatus(204);
  };

  public validatePassword = async (req: Req, res: Res) => {
    const { password } = req.body;
    checkReqBody(password);
    const { email } = req.user;
    await this.userService.validatePassword(email, password);
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
    res.sendStatus(204);
  };

  public softDeleteUser = async (req: Req, res: Res) => {
    const { userId } = req.user;
    await this.userService.softDeleteUser(userId);
    res.setHeader('Set-Cookie', 'Authorization=; Max-age=0; path=/');
    res.sendStatus(204);
  };
}

const userController = new UserController();

export { userController };
