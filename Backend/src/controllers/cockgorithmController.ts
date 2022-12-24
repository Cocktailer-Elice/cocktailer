import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import {
  CockgorithmReqData,
  ProcessedMaterail,
  CockgorithmResData,
} from 'types';
import CockgorithmService from '../services/cockgorithmService';

class CockgorithmController {
  private readonly CockgorithmService = new CockgorithmService();

  public activateCockgorithm = async (req: Req, res: Res) => {
    const rowMaterial: CockgorithmReqData = req.body;

    const degreeRange = rowMaterial.degree.split('~');

    const processedMaterial: ProcessedMaterail = {
      category: rowMaterial.category,
      alcohol: rowMaterial.alcohol,
      minDegree: Number(degreeRange[0]),
      maxDegree: Number(degreeRange[1]),
      ingredients: rowMaterial.ingredients,
    };

    const data: CockgorithmResData =
      await this.CockgorithmService.activateCockgorithm(processedMaterial);

    res.status(200).json({ data: data });
  };
}
const cockgorithmController = new CockgorithmController();

export { cockgorithmController };
