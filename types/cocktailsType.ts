//types

export interface CocktailCreateReqData {
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

export interface FindCocktailId {
  cocktailId: number;
}

export interface FindCocktailCategoryAndSearch {
  category: string;
  official: string;
  keyword: string;
}

export interface CocktailGetResData {
  id: number;
  owner: string;
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  ratio: object;
  content: string;
}

export interface MyCockcipe {
  id: number;
  category: string;
  name: string;
  flavor: [string];
  degree: number;
  img: string;
  ratio: object;
  content: string;
  likes: number;
  createdAt: number;
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
}
