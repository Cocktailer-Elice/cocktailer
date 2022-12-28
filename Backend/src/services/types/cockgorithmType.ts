import { CockgorithmResData } from 'types';

export interface CockgorithmServiceType {
  category: string;
  alcohol: string;
  minDegree: number;
  maxDegree: number;
  ingredients: string[];
}

export interface ProcessedMaterial {
  category: string;
  alcohol: string;
  minDegree: number;
  maxDegree: number;
  ingredients: string[];
}

export interface Material {
  minDegree: number;
  maxDegree: number;
  alcohol: string;
  category: string;
  ingredients: [];
}

interface CockgorithmResults {
  cocktails: CockgorithmResData[];
}
