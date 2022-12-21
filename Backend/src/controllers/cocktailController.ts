import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { Cocktail } from '../services/types';
import { CocktailCreateReqDto, CocktailGetResDto } from 'types';
import CocktailService from '../services/cocktailService';

class CoctailController {
  private readonly cocktailService = new CocktailService();

  public createCocktail = async (req: Req, res: Res, next: Next) => {
    const cocktailInfo: CocktailCreateReqDto = req.body;

    const createCocktailData: Cocktail | null =
      await this.cocktailService.createCocktail(cocktailInfo);

    res.status(200).json({ data: createCocktailData });
  };

  public getLists = async (req: Req, res: Res, next: Next) => {
    const lists = await this.cocktailService.lists();

    res.status(200).json({ lists: lists });
  };

  public findId = async (req: Req, res: Res, next: Next) => {
    const id = Number(req.params.id);

    const cocktail = await this.cocktailService.findId(id);

    res.status(200).json({ cocktail: cocktail });
  };

  public findCategory = async (req: Req, res: Res, next: Next) => {
    const category = String(req.query.category);

    const official = Boolean(req.query.official);

    const categoryLists = await this.cocktailService.findCategory(
      category,
      official,
    );

    res.status(200).json({ categoryLists: categoryLists });
  };

  public getCocktail = async (req: Req, res: Res, next: Next) => {
    const id = req.params.id ? Number(req.params.id) : null;

    const category = req.query.category ? String(req.query.category) : null;

    const official = req.query.official ? Boolean(req.query.official) : null;

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
