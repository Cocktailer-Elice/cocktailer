interface Ingredients {
  alcohol: string[];
  drink: string[];
  garnish: string[];
}

export interface Cocktail {
  id: number;
  cocktailName: string;
  cocktailCategory: string;
  cocktailFlavor: string[];
  cocktailDegree: number;
  cocktailImgUrl: string; //칵테일 이미지 url
  cocktailProducts: Ingredients;
}
