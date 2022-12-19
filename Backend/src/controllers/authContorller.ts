import { UserCreateData } from 'types';
import { Request as Req, Response as Res } from 'express';
import { LoginReqData } from 'types';
import AuthService from '../services/authService';
import { createToken, createCookie } from './utils';

class AuthController {
  private readonly authService = new AuthService();

  public signup = async (req: Req, res: Res) => {
    const userInfo: UserCreateData = req.body;
    const newUser = await this.authService.signup(userInfo);

    const tokenData = createToken(newUser);
    const cookie = createCookie(tokenData);
    res.setHeader('Set-Cookie', [cookie]);
    res.status(201).json(newUser.userGetResDto);
  };

  public checkEmailDuplicate = async (req: Req, res: Res) => {
    const { email } = req.body;
    await this.authService.checkEmailDuplicate(email);
    res.sendStatus(204);
  };

  public login = async (req: Req, res: Res) => {
    const userData: LoginReqData = req.body;
    const foundUser = await this.authService.login(userData);
    const tokenData = createToken(foundUser);
    const cookie = createCookie(tokenData);
    res.setHeader('Set-Cookie', [cookie]);
    res.status(200).json(foundUser.userGetResDto);
  };

  public logout = async (req: Req, res: Res) => {
    const userData = req.user;
    await this.authService.logout(userData);

    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    res.sendStatus(204);
  };

  public generateAuthCode = async (req: Req, res: Res) => {
    const { tel } = req.body;
    const code = await this.authService.generateAuthCode(tel);
    res.status(202).json({ code });
  };

  public validateAuthCode = async (req: Req, res: Res) => {
    const { tel, code } = req.body;
    await this.authService.validateAuthCode(tel, code);
    res.sendStatus(204);
  };

  public validatePassword = async (req: Req, res: Res) => {
    const { password } = req.body;
    const { email } = req.user;
    await this.authService.validatePassword(email, password);
    res.sendStatus(204);
  };
}

const authController = new AuthController();

export { authController };
