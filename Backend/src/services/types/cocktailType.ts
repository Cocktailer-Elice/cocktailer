interface Ingredients {
  alcohol: string[];
  drink: string[];
  garnish: string[];
}

export interface Cocktail {
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
