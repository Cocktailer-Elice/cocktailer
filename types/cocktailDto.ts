interface Iingredients {
  alcohol: string[];
  drink: string[];
  garnish: string[];
}

export interface CocktailCreateReqDto {
  id: number;
  cocktailName: string;
  cocktailCategory: string;
  cocktailFlavor: string[];
  cocktailDegree: number;
  cocktailImgUrl: string;
  cocktailProducts: Iingredients;
}

export interface CocktailGetResDto {
  id: number;
  cocktailName: string;
  cocktailCategory: string;
  cocktailFlavor: string[];
  cocktailDegree: number;
  cocktailImgUrl: string;
  cocktailProducts: Iingredients;
  cocktailLikes: number;
}
