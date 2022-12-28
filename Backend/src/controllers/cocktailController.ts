import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { CocktailCreateReqData, Rankings } from 'types';
import { redisCache } from '../redis';

import CocktailService from '../services/cocktailService';

class CocktailController {
  private readonly cocktailService = new CocktailService();

  public getHomeCocktailAndUserList = async (req: Req, res: Res) => {
    console.log('getHomeCocktailAndUserList');

    // 인국님 테스트 해보세용
    // await redisCache.del('ranking'); //얘는 캐시 지우는 애
    const cachedValue = (await redisCache.get('ranking')) as string;
    console.log(cachedValue);

    const data: Rankings = cachedValue
      ? JSON.parse(cachedValue)
      : await this.cocktailService.getHomeCocktailAndUserList();

    res.status(200).json({
      cocktailRanking: data.cocktailRankings,
      userRanking: data.userRankings,
    });

    // 나중에 캐싱 테스트용 콘솔로그는 지워주세용
    if (!cachedValue) {
      await redisCache.set('ranking', JSON.stringify(data));
      console.log('레디스에 캐싱됨');
    }
  };

  public createCocktail = async (req: Req, res: Res) => {
    console.log('createCocktail');

    const cocktailInfo: CocktailCreateReqData = req.body;

    const allInfo = {
      owner: req.user.userId,
      ...cocktailInfo,
    };

    console.log(allInfo);

    const createCocktailData: number =
      await this.cocktailService.createCocktail(allInfo);

    res.status(200).json({ data: createCocktailData });
  };

  public getLists = async (req: Req, res: Res) => {
    console.log('getLists');

    const lists = await this.cocktailService.getLists();

    res.status(200).json({ lists: lists });
  };

  public findByUserId = async (req: Req, res: Res) => {
    console.log('findByUserId');

    const userId = req.user.userId;

    console.log(userId);

    const lists = await this.cocktailService.findByUserId(userId);

    res.status(200).json({ lists: lists });
  };

  public findCocktailId = async (req: Req, res: Res) => {
    console.log('findCocktailId');

    const cocktailId = Number(req.params.cocktailId);

    console.log(req.user.userId);

    const cocktail = await this.cocktailService.findCocktailId(
      cocktailId,
      req.user.userId,
    );

    console.log(cocktail);

    // const own: boolean = false;

    // if (cocktail?.owner === req.user.userId) {
    //   own = true;
    // }

    res.status(200).json(cocktail);
  };

  public findCocktailCategoryAndSearch = async (req: Req, res: Res) => {
    console.log('findCocktailCategoryAndSearch');

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

    console.log(reqData);

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

    const updateCocktailInfo: CocktailCreateReqData = req.body;

    const userId = req.user.userId;

    const result: any = await this.cocktailService.updateCocktail(
      cocktailId,
      userId,
      updateCocktailInfo,
    );

    res.status(200).json({ updateCocktailInfo: result });
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

    res.status(200).json({ likes: result });
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
