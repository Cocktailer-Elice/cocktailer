import { Request, Response } from 'express';

/* 
 1차 프로젝트때의 그 구조!!
*/
export const RecipeController = {
  createRecipe: async (req: Request, res: Response) => {
    const { test1, test2 } = req.body;
    console.log(test1);
    console.log(test2);
  },
};
