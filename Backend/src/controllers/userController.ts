import { Request as Req, Response as Res } from 'express';
import UserService from '../services/userService';

class UserController {
  private readonly userService = new UserService();

  public getUserById = async (req: Req, res: Res) => {
    const { id } = req.params;
    const foundUser = await this.userService.getUserById(id);
    res.status(200).json(foundUser!.userGetResDto);
  };
}

const userController = new UserController();

export { userController };
