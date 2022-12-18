import { sign } from 'jsonwebtoken';
import { Token, TokenData } from './../routers/middlewares/types/authType';
import { IUser } from './../db/types/userType';
import { UserCreateData } from 'types';
import { Request as Req, Response as Res } from 'express';
import { LoginReqData } from 'types';
import AuthService from '../services/authService';

const ACCESS_KEY = process.env.ACCESS_KEY;
const ACCESS_EXPIRE = process.env.ACCESS_EXPIRE;

class AuthController {
  private readonly authService = new AuthService();

  public signup = async (req: Req, res: Res) => {
    const userInfo: UserCreateData = req.body;
    const newUser = await this.authService.signup(userInfo);

    const tokenData = this.createToken(newUser);
    const cookie = this.createCookie(tokenData);
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
    const tokenData = this.createToken(foundUser);
    const cookie = this.createCookie(tokenData);
    res.setHeader('Set-Cookie', [cookie]);
    res.status(200).json(foundUser.userGetResDto);
  };

  public logout = async (req: Req, res: Res) => {
    const userData = req.user;
    await this.authService.logout(userData);

    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    res.sendStatus(204);
  };

  private createToken(user: IUser): Token {
    const tokenData: TokenData = {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      isBartender: user.isBartender,
    };
    const secretKey: string = ACCESS_KEY as string;
    const expiresIn: string = ACCESS_EXPIRE as string;

    return {
      expiresIn,
      token: sign(tokenData, secretKey, { expiresIn }),
    };
  }

  private createCookie(tokenData: Token): string {
    const { token, expiresIn } = tokenData;
    return `Authorization=${token}; HttpOnly; Max-Age=${expiresIn};`;
  }
}

const authController = new AuthController();

export { authController };
