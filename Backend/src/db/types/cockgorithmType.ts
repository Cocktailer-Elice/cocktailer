import { CocktailGetResData } from 'types';

export interface CockgorithmModelType {
  id: number;
  name: string;
  img: string;
  degree: number;
  content: string;

  readonly cocktailInfo: CocktailGetResData;
}
