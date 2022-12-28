import { checkReqBody } from './utils/checkReqBody';
import { CockflowInfo } from '../services';
import { Request as Req, Response as Res } from 'express';
import cockflowService from '../services/cockflowService';
import { cockflowContants } from './utils/constants';

class CockflowController {
  private readonly cockflowService = cockflowService;

  public createCockflow = async (req: Req, res: Res) => {
    const { title, content } = req.body;
    checkReqBody(title, content);
    const owner = req.user.userId;
    const cockflowInfo: CockflowInfo = { ...req.body, owner };
    const newCockflow = await this.cockflowService.createCockflow(cockflowInfo);
    res.status(201).json(newCockflow);
  };

  public getCockflowsByRequest = async (req: Req, res: Res) => {
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

  public getMyCockflows = async (req: Req, res: Res) => {
    const { userId } = req.user;
    const cockflows = await this.cockflowService.getMyCockflows(+userId);
    res.status(200).json(cockflows);
  };

  public updateCockflow = async (req: Req, res: Res) => {
    const { title, content } = req.body;
    checkReqBody(title, content);
    const { cockflowId } = req.params;
    const { userId } = req.user;
    await this.cockflowService.updateCockflow(
      title,
      content,
      +cockflowId,
      userId,
    );
    res.sendStatus(204);
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
