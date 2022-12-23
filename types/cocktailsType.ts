export interface CocktailCreateReqDto {
  id: number;
  owner: string;
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  ratio: object;
  content: string;
}

export interface CocktailGetResDto {
  id: number;
  owner: string;
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  liquid: object;
  ratio: object;
  content: string;
}

export interface MyCockcipe {
  category: string;
  name: string;
  flavor: [string];
  degree: number;
  img: string;
  ration: object;
  content: string;
  likes: number;
  createdAt: number;
}
