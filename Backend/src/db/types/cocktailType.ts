//model

import { CocktailGetResData } from 'types';

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
