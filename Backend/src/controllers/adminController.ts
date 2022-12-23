import { Request as Req, Response as Res } from 'express';
import AdminService from '../services/adminService';
import { checkReqBody } from './utils';

class AdminController {
  private readonly adminService = new AdminService();

  public verifyBartender = async (req: Req, res: Res) => {
    const { userId } = req.body;
    checkReqBody(userId);
    await this.adminService.verifyBartender(+userId);
    res.sendStatus(204);
  };

  public changeUserRole = async (req: Req, res: Res) => {
    const { userId } = req.body;
    checkReqBody(userId);
    await this.adminService.changeUserRole(+userId);
    res.sendStatus(204);
  };
}

const adminController = new AdminController();

export { adminController };
