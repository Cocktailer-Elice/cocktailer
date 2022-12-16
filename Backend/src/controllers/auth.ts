import { Request as Req, Response as Res } from 'express';
import { UserCookie } from '../types';
import { UserCreateData, LoginReqData } from 'types';
import AuthService from '../services/auth';

class AuthController {
  private readonly authService = new AuthService();

  public signup = async (req: Req, res: Res) => {
    const userInfo: UserCreateData = req.body;
    const { cookie, newUser } = await this.authService.signup(userInfo);
    res.setHeader('Set-Cookie', [cookie]);
    res.status(201).json(newUser.userGetResDto);
  };

  public login = async (req: Req, res: Res) => {
    const userData: LoginReqData = req.body;
    const { cookie, foundUser } = await this.authService.login(userData);

    res.setHeader('Set-Cookie', [cookie]);
    res.status(200).json(foundUser.userGetResDto);
  };

  public logout = async (req: Req, res: Res) => {
    const userData = req.user as UserCookie;
    await this.authService.logout(userData);

    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    res.sendStatus(204);
  };
}

const authController = new AuthController();

export { authController };
