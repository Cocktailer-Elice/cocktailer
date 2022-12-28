import { CocktailGetResData } from 'types';

export interface CockgorithmModelType {
  id: number;
  name: string;
  img: string;
  degree: number;
  content: string;

  readonly cocktailInfo: CocktailGetResData;
}

export interface Material {
  minDegree: number;
  maxDegree: number;
  alcohol: string;
  category: string;
  ingredients: string[];
}
