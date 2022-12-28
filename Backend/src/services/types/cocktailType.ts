//service

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

export interface CocktailCreateAndUpdate {
  owner: number;
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  ratio: Ratio;
  content: string;
}

export interface CocktailServiceType {
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  ratio: Ratio;
  content: string;
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

export interface UpdateResult {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedCount: number;
  matchedCount: number;
}
