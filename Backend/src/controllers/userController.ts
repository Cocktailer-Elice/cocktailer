import { IUser } from './../db/types/userType';
import { Request as Req, Response as Res } from 'express';
import UserService from '../services/userService';
import AuthService from '../services/authService';
import { checkReqBody } from './utils';

class UserController {
  private readonly userService = new UserService();

  private readonly authService = new AuthService();

  public getUserById = async (req: Req, res: Res) => {
    const { id } = req.params;
    const foundUser = await this.userService.getUserById(id);
    res.status(200).json((foundUser as IUser).userGetResDto);
  };

  public findUserEmail = async (req: Req, res: Res) => {
    const { name, tel } = req.body;
    checkReqBody(name, tel);
    const foundEmail = await this.userService.findUserEmail(name, tel);
    res.status(200).json({ email: foundEmail });
  };

  public generateAuthCode = async (req: Req, res: Res) => {
    const { tel } = req.body;
    checkReqBody(tel);
    await this.authService.generateAuthCode(tel);
    res.status(202).json();
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
}

const userController = new UserController();

export { userController };
