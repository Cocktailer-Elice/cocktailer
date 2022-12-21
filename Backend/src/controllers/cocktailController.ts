import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { Cocktail } from '../services/types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import CocktailService from '../services/cocktailService';

class CoctailController {
  private readonly cocktailService = new CocktailService();

  public createCocktail = async (req: Req, res: Res, next: Next) => {
    const cocktailInfo: CocktailCreateReqDto = req.body;

    console.log(cocktailInfo);

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

  public getLists = async (req: Req, res: Res, next: Next) => {
    const lists = await this.cocktailService.lists();
    res.status(200).json({ lists: lists });
  };

  public getCocktail = async (req: Req, res: Res, next: Next) => {
    const id = req.params.id ? Number(req.params.id) : null;
    const category = req.query.category ? String(req.query.category) : null;
    const official = req.query.official ? String(req.query.official) : null;

    const getCocktailData = await this.cocktailService.getCocktail(
      id,
      category,
      official,
    );

    //해당 단은 의도하기나름  => 범용적사용 X = > 서로 다른 API사용

    //return type => 단건 다건 분리하는게 좋음.
    res.status(200).json({ getCocktailData: getCocktailData });
  };
}

const cocktailController = new CoctailController();

export { cocktailController };
