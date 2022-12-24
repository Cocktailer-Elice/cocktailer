import { AppError } from '../errorHandler';
import { errorNames } from '../errorNames';
import { UserCreateData } from 'types';
import { Request as Req, Response as Res } from 'express';
import { LoginReqData } from 'types';
import authService from '../services/authService';
import { createToken, createCookie, checkReqBody } from './utils';
import { redisCache } from '../redis';

class AuthController {
  private readonly authService = authService;

  public signup = async (req: Req, res: Res) => {
    const jwtToken = req.cookies.Authorization;
    if (jwtToken) {
      throw new AppError(errorNames.businessError, 400, '비정상적 접근');
    }
    const { name, email, password, birthday, tel, alcohol } = req.body;
    checkReqBody(name, email, password, birthday, tel, alcohol);
    const userInfo: UserCreateData = req.body;
    const newUser = await this.authService.signup(userInfo);

    const tokenData = createToken(newUser);
    const cookie = createCookie(tokenData, newUser._id);
    res.setHeader('Token', cookie);
    res.status(201).json(newUser.userGetResDto);
  };

  public checkEmailDuplicate = async (req: Req, res: Res) => {
    const { email } = req.body;
    checkReqBody(email);
    await this.authService.checkEmailDuplicate(email);
    res.sendStatus(204);
  };

  public login = async (req: Req, res: Res) => {
    const { email, password, isAutoLogin } = req.body;
    checkReqBody(email, password, isAutoLogin);
    const jwtToken = req.cookies.Authorization;
    if (jwtToken) {
      throw new AppError(errorNames.businessError, 400, '비정상적 접근');
    }
    const userData: LoginReqData = req.body;
    const user = await this.authService.login(userData);
    const tokenData = createToken(user);
    const cookie = createCookie(tokenData, user._id);
    if (isAutoLogin) {
      await redisCache.SETEX(user._id.toString(), 604800, '1');
    }
    res.setHeader('Set-Cookie', cookie);
    res.status(200).json(user.userGetResDto);
  };

  public logout = async (req: Req, res: Res) => {
    res.setHeader('Set-Cookie', 'Authorization=; Max-age=0; path=/');
    res.sendStatus(204);
  };

  public generateAuthCode = async (req: Req, res: Res) => {
    const { tel } = req.body;
    checkReqBody(tel);
    await this.authService.checkTelDuplicate(tel);
    await this.authService.generateAuthCode(tel);
    res.sendStatus(204);
  };

  public validateAuthCode = async (req: Req, res: Res) => {
    const { tel, code } = req.body;
    checkReqBody(tel, code);
    await this.authService.validateAuthCode(tel, code);
    res.sendStatus(204);
  };

  public verifyToken = async (req: Req, res: Res) => {
    const id = req.user.userId;
    const { name, email, nickname, isBartender, avatarUrl } = req.user;
    res.status(200).json({ id, name, email, nickname, isBartender, avatarUrl });
  };
}

const authController = new AuthController();

export { authController };
