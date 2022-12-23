//types

export interface CocktailCreateReqData {
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
