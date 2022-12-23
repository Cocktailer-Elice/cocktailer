//model

import { CocktailGetResData } from 'types';

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
    alcohol: object;
    ingredient: object;
  };
  content: string;

  readonly cocktailInfo: CocktailGetResData;
}
