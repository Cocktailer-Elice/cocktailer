//model

import { CocktailGetResData } from 'types';
type Ratio = {
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
export interface CocktailModelType {
  id: number;
  owner: number;
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  ratio: Ratio;
  content: string;
  likes: number;
  likesUser: object;

  readonly cocktailInfo: CocktailGetResData;
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
