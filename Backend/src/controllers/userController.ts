import { IUser } from './../db/types/userType';
import { Request as Req, Response as Res } from 'express';
import UserService from '../services/userService';
import AuthService from '../services/authService';

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
    const foundEmail = await this.userService.findUserEmail(name, tel);
    res.status(200).json({ email: foundEmail });
  };

  public generateAuthCode = async (req: Req, res: Res) => {
    const { tel } = req.body;
    await this.authService.generateAuthCode(tel);
    res.status(202).json();
  };

  public verifyUser = async (req: Req, res: Res) => {
    const { name, email, tel } = req.body;
    await this.userService.verifyUser(name, email, tel);
    res.sendStatus(204);
  };

  public validatePassword = async (req: Req, res: Res) => {
    const { password } = req.body;
    const { email } = req.user;
    await this.userService.validatePassword(email, password);
    res.sendStatus(204);
  };
}

const userController = new UserController();

export { userController };
