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
  // ratio: {
  //   alcohol: {
  //     [key: string]: Array;
  //   };
  //   ingredient: {};
  // };
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
  ratio: object;
  content: string;
}
