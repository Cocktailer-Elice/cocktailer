import { Request as Req, Response as Res } from 'express';
import {
  CocktailCreateReqData,
  Rankings,
  CocktailObj,
  UpdateResult,
} from 'types';
import cachingEvents from '../events/cachingEvents';
import { redisCache } from '../redis';

import CocktailService from '../services/cocktailService';

class CocktailController {
  private readonly cocktailService = new CocktailService();

  public getHomeCocktailAndUserList = async (req: Req, res: Res) => {
    const cachedValue = (await redisCache.get('ranking')) as string;

    const data: Rankings = cachedValue
      ? JSON.parse(cachedValue)
      : await this.cocktailService.getHomeCocktailAndUserList();

    res.status(200).json({
      cocktailRanking: data.cocktailRankings,
      userRanking: data.userRankings,
    });

    if (!cachedValue) {
      await redisCache.set('ranking', JSON.stringify(data));
      cachingEvents.emit('rankingCachingUpdate');
    }
  };

  public createCocktail = async (req: Req, res: Res) => {
    const cocktailInfo: CocktailCreateReqData = req.body;

    const createCocktailObj: CocktailObj = {
      owner: req.user.userId,
      ...cocktailInfo,
      official:
        req.user.isBartender === true || req.user.isAdmin === true
          ? true
          : false,
    };

    const createCocktailData: number =
      await this.cocktailService.createCocktail(createCocktailObj);

    res.status(200).json({ data: createCocktailData });
  };

  public getLists = async (req: Req, res: Res) => {
    const lists = await this.cocktailService.getLists();

    res.status(200).json({ lists: lists });
  };

  public findByUserId = async (req: Req, res: Res) => {
    const userId = req.user.userId;

    const lists = await this.cocktailService.findByUserId(userId);

    res.status(200).json({ lists: lists });
  };

  public findCocktailId = async (req: Req, res: Res) => {
    const cocktailId = Number(req.params.cocktailId);

    const cocktail = await this.cocktailService.findCocktailId(
      cocktailId,
      req.user.userId,
    );

    res.status(200).json(cocktail);
  };

  public findCocktailCategoryAndSearch = async (req: Req, res: Res) => {
    interface ReqData {
      category: string;
      [optionKey: string]: string;
    }

    const reqData: ReqData = {
      category: String(req.query.category),
    };

    if (req.query.official) {
      reqData.official = String(req.query.official);
    }

    if (req.query.keyword) {
      reqData.keyword = String(req.query.keyword);
    }

    const endpoint = Number(req.query.endpoint) || 0;

    const categoryLists =
      await this.cocktailService.findCocktailCategoryAndSearch(
        reqData,
        endpoint,
      );

    res.status(200).json({ categoryLists: categoryLists });
  };

  public updateCocktail = async (req: Req, res: Res) => {
    const cocktailId = Number(req.params.cocktailId);

    const updateCocktailInfo: CocktailObj = req.body;

    const userId = req.user.userId;

    const result: UpdateResult = await this.cocktailService.updateCocktail(
      cocktailId,
      userId,
      updateCocktailInfo,
    );

    if (result.update === false) {
      res.status(400).json(result);
    } else {
      res.status(200).json(result);
    }
  };

  public deleteCocktail = async (req: Req, res: Res) => {
    const cocktailId = Number(req.params.cocktailId);

    const userId = req.user.userId;

    const result: string = await this.cocktailService.deleteCocktail(
      userId,
      cocktailId,
    );

    res.status(200).json({ message: result });
  };

  public cocktailLikes = async (req: Req, res: Res) => {
    const cocktailId = Number(req.params.cocktailId);

    const userId = Number(req.user.userId);

    const result: number = await this.cocktailService.cocktailLikes(
      userId,
      cocktailId,
    );

    console.log(result);

    res.status(200).json({ likes: result });
  };

  ////////////////////////////////
  //       목데이터 생성기       //
  ////////////////////////////////

  public makeMockData = async (req: Req, res: Res) => {
    const result: any = await this.cocktailService.makeMockData();

    res.status(200).json({ result: result });
  };
}

const cocktailController = new CocktailController();

export { cocktailController };
