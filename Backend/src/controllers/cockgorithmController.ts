import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { CocktailCreateReqDto } from 'types';
import CockgorithmService from '../services/cockgorithmService';

class CockgorithmController {
  private readonly CockgorithmService = new CockgorithmService();

  public activateCockgorithm = async (req: Req, res: Res) => {
    /*
    { 
        "degree" : "0~10",
        "baseAlcohol" : "진", 
        "category" : "sweet",
        "drink" : "주스",
        "ingredients" : "꿀"
    }
    */

    const rowMaterial = req.body;

    const processedMaterial: any = {};

    if ('degree' in rowMaterial) {
      const degree: string[] = String(rowMaterial.degree).split('~');
      processedMaterial.minD = Number(degree[0]);
      processedMaterial.maxD = Number(degree[1]);
    }
    if ('alcohol' in rowMaterial) {
      processedMaterial.alcohol = rowMaterial.baseAlcohol;
    }
    if ('category' in rowMaterial) {
      processedMaterial.category = rowMaterial.category;
    }

    if ('ingredient' in rowMaterial) {
      processedMaterial.ingredients = rowMaterial.ingredient;
    }

    const data: CocktailCreateReqDto[] =
      await this.CockgorithmService.activateCockgorithm(processedMaterial);
    res.status(200).json({ data: data });
  };
}
const cockgorithmController = new CockgorithmController();

export { cockgorithmController };
