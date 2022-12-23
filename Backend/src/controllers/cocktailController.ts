import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { CocktailCreateReqData } from 'types';
import CocktailService from '../services/cocktailService';

class CocktailController {
  private readonly cocktailService = new CocktailService();

  public createCocktail = async (req: Req, res: Res) => {
    console.log('createCocktail');

    const cocktailInfo: CocktailCreateReqData = req.body;

    const createCocktailData: number =
      await this.cocktailService.createCocktail(cocktailInfo);

    res.status(200).json({ data: createCocktailData });
  };

  public getLists = async (req: Req, res: Res) => {
    console.log('getLists');
    const lists = await this.cocktailService.getLists();

    res.status(200).json({ lists: lists });
  };

  public findByUserId = async (req: Req, res: Res) => {
    console.log('findByUserId');
    const userId = Number(req.params.userId);

    const lists = await this.cocktailService.findByUserId(userId);

    res.status(200).json({ lists: lists });
  };

  public findCocktailId = async (req: Req, res: Res) => {
    console.log('findCocktailId');

    const cocktailId = Number(req.params.cocktailId);

    const cocktail = await this.cocktailService.findCocktailId(cocktailId);

    res.status(200).json({ cocktail: cocktail.cocktailInfo });
  };

  public findCocktailCategoryAndSearch = async (req: Req, res: Res) => {
    console.log('findCocktailCategoryAndSearch');

    const reqData: any = {};

    if (req.query.category) {
      reqData.category = req.query.category;
    }
    if (req.query.official) {
      reqData.official = req.query.official;
    }
    if (req.query.keyword) {
      reqData.keyword = req.query.keyword;
    }

    const endpoint = Number(req.query.endpoint) || 0;

    const categoryLists =
      await this.cocktailService.findCocktailCategoryAndSearch(
        reqData,
        endpoint,
      );

    res.status(200).json({ categoryLists: categoryLists });
  };

  ////////////////////////////////
  //       목데이터 생성기       //
  ////////////////////////////////

  public makeMockData = async (req: Req, res: Res) => {
    console.log('생성기 시작 _controller');
    const result: any = await this.cocktailService.makeMockData();
    res.status(200).json({ result: result });
  };
}

const cocktailController = new CocktailController();

export { cocktailController };
