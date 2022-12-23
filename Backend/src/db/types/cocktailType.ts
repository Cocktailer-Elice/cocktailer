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

  readonly cocktailInfo: CocktailGetResData;
}
