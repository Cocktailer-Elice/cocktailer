import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ICocktail } from '../types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import CocktailService from '../services/cocktailService';

class CoctailController {
  private readonly cocktailService = new CocktailService();

  public createMyCocktail = async (req: Req, res: Res, next: Next) => {
    try {
      const cocktailInfo: CocktailCreateReqDto = req.body;

      /*
      if(role === 'admin' && role !== 'user' && role !== 'bartender'){
        cocktailInfo.official = true;
      }
      */

      const createCocktailData: ICocktail | null =
        await this.cocktailService.createCocktail(cocktailInfo);

      res
        .status(200)
        .json({ data: createCocktailData, message: 'cocktailCreated' });
    } catch (error) {
      next(error);
    }
  };

  public getMyCocktail = async (req: Req, res: Res, next: Next) => {
    try {
      const cocktailId = Number(req.query.mycocktail);

      const getCocktailData = await this.cocktailService.getCocktail(
        cocktailId,
      );

      res.status(200).json({ getCocktailData: getCocktailData });
    } catch (error) {
      next(error);
    }
  };
}

const cocktailController = new CoctailController();

export { cocktailController };
