//service

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

export interface ReqData {
  [optionKey: string]: string;
}

export interface CocktailObj {
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
}

export interface CocktailServiceType {
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

export interface UpdateResult {
  update: boolean;
  cocktailId: number;
}
