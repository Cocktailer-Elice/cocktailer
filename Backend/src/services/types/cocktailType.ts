//service

export interface CocktailServiceType {
  owner: number;
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  ratio: {
    alcohol: object;
    ingredient: object;
  };
  content: string;
}
