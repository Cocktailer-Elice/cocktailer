import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { RequestWithCookie, IUser, UserCookie } from '../types';
import { UserCreateDto, LoginDto } from '../dtos';
import AuthService from '../services/auth';

class AuthController {
  private readonly authService = new AuthService();

  public signUp = async (req: Req, res: Res, next: Next) => {
    try {
      const userInfo: UserCreateDto = req.body;
      const signUpUserData: IUser | null = await this.authService.signup(
        userInfo,
      );

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Req, res: Res, next: Next) => {
    const userData: LoginDto = req.body;
    const { cookie, findUser } = await this.authService.login(userData);

    res.setHeader('Set-Cookie', [cookie]);
    return res.status(200).json(findUser);
  };

  public logout = async (req: RequestWithCookie, res: Res, next: Next) => {
    const userData: UserCookie = req.user;
    await this.authService.logout(userData);

    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    return res.status(204);
  };
}

const authController = new AuthController();

export { authController };
