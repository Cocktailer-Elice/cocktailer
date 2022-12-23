export interface CockgorithmReqData {
  category: string;
  alcohol: string;
  degree: string;
  ingredients: string[];
}

export interface CockgorithmResData {
  id: number;
  name: string;
  img: string;
  degree: number;
  content: string;
}
