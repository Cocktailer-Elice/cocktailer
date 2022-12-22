import { CockflowInfo } from '../services';
import { Request as Req, Response as Res } from 'express';
import CockflowService from '../services/cockflowService';
import { cockflowContants } from './utils/constants';

class CockflowController {
  private readonly cockflowService = new CockflowService();

  public createCockflow = async (req: Req, res: Res) => {
    const owner = req.user.userId;
    const cockflowInfo: CockflowInfo = { ...req.body, owner };
    const newCockflow = await this.cockflowService.createCockflow(cockflowInfo);
    res.status(201).json(newCockflow);
  };

  public getCockflows = async (req: Req, res: Res) => {
    const scroll = req.query.q ? req.query.q : 1;
    const cockflowsPerRequest = cockflowContants.COCKFLOWS_PER_REQUEST;
    const result = await this.cockflowService.getCockflowsByRequest(
      +scroll,
      cockflowsPerRequest,
    );
    res.status(200).json(result);
  };

  public getCockflowById = async (req: Req, res: Res) => {
    const { cockflowId } = req.params;
    const cockflow = await this.cockflowService.getCockflowById(+cockflowId);
    res.status(200).json(cockflow);
  };

  public deleteCockflow = async (req: Req, res: Res) => {
    const { cockflowId } = req.params;
    const { userId } = req.user;
    await this.cockflowService.deleteCockflow(+cockflowId, userId);
    res.sendStatus(204);
  };
}

const cockflowController = new CockflowController();

export { cockflowController };
