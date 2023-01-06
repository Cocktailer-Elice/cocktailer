import { CocktailCreateReqData } from 'types';

//model

import { CocktailGetResData } from 'types';

export interface ICocktailModel {
  Mongo: CocktailInterface;
}

export interface CocktailInterface {
  getHomeCocktailAndUserList(): Promise<Rankings>;

  createCocktail(cocktailCreateDto: CocktailCreateReqData): Promise<number>;

  getLists(): Promise<CocktailModelType[]>;

  findByUserId(userId: number): Promise<CocktailModelType[]>;

  findCocktailId(
    id: number,
    userId: number | null,
  ): Promise<FindCocktailId | null>;

  findCocktailCategoryAndSearch(
    reqData: object,
    lastId: number,
  ): Promise<CocktailModelType[]>;

  updateCocktail(
    cocktailId: number,
    userId: number,
    cocktailCreateDto: CocktailCreateReqData,
  ): Promise<UpdateResult>;

  cocktailLikes(userId: number, cocktailId: number): Promise<number>;
}

export interface CocktailRankings {
  id: number;
  img: string;
  name: string;
  official: boolean;
  owner: {
    nickname: string;
    isBartender: boolean;
  };
  likes: number;
}

export interface UserRanking {
  id: number;
  avatarUrl: string;
  nickname: string;
  points: number;
  isBartender: boolean;
}

export interface Rankings {
  cocktailRankings: CocktailRankings[];
  userRankings: UserRanking[];
}

export interface CocktailObj {
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  ratio: {
    alcohol: {
      [anykey: string]: [
        {
          [anykey: string]: number;
        },
      ];
    };
    ingredient: {
      [anykey: string]: [
        {
          [anykey: string]: number;
        },
      ];
    };
  };
  content: string;
}

export interface CocktailModelType {
  id: number;
  owner: number;
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  ratio: {
    alcohol: {
      [anykey: string]: [
        {
          [anykey: string]: number;
        },
      ];
    };
    ingredient: {
      [anykey: string]: [
        {
          [anykey: string]: number;
        },
      ];
    };
  };
  content: string;
  likes: number;
  likesUser: {
    [uid: string]: boolean;
  };
  readonly cocktailInfo: CocktailGetResData;
}

export interface FindCocktailId {
  cocktail: {
    id: number;
    owner: number;
    category: string;
    name: string;
    official: boolean;
    flavor: string;
    degree: number;
    img: string;
    ratio: {
      alcohol: {
        [anykey: string]: [
          {
            [anykey: string]: number;
          },
        ];
      };
      ingredient: {
        [anykey: string]: [
          {
            [anykey: string]: number;
          },
        ];
      };
    };
    content: string;
    likes: number;
    likesUser: {
      [uid: string]: boolean;
    };
    readonly cocktailInfo: CocktailGetResData;
  };
  liked: boolean;
}

export interface DBUpdateResult {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedCount: number;
  matchedCount: number;
}

export interface UpdateResult {
  update: boolean;
  cocktailId: number;
}

export interface LikesUser {
  likes: number;
  likesUser: {
    [userId: number]: boolean;
  };
}

export interface CocktailLists {
  sweet: [[object]];
  dry: [[object]];
  refreshing: [[object]];
  fruit: [[object]];
  smoothie: [[object]];
  hot: [[object]];
}

export interface ReqData {
  [optionKey: string]: string;
}
