interface Iingredients {
  alcohol: string[];
  drink: string[];
  garnish: string[];
}

export interface ICocktail {
  id: number;
  cocktailName: string;
  cocktailCategory: string;
  cocktailFlavor: string[];
  cocktailDegree: number;
  cocktailImgUrl: string; //칵테일 이미지 url
  cocktailProducts: Iingredients;
}
