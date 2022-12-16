import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { Cocktail } from '../services/types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import CocktailService from '../services/cocktailService';

class CoctailController {
  private readonly cocktailService = new CocktailService();

  public createCocktail = async (req: Req, res: Res, next: Next) => {
    const cocktailInfo: CocktailCreateReqDto = req.body;

    /*
      if(role === 'admin' && role !== 'user' && role !== 'bartender'){
        cocktailInfo.official = true;
      }
      */

    const createCocktailData: Cocktail | null =
      await this.cocktailService.createCocktail(cocktailInfo);

    res
      .status(200)
      .json({ data: createCocktailData, message: 'cocktailCreated' });
  };

  public getCocktail = async (req: Req, res: Res, next: Next) => {
    const cocktailId = Number(req.query.cocktail);

    const getCocktailData = await this.cocktailService.getCocktail(cocktailId);

    res.status(200).json({ getCocktailData: getCocktailData });
  };
}

const cocktailController = new CoctailController();

export { cocktailController };
