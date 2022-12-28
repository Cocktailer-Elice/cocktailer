import { Material } from '../types';
export const firstSearch = (material: Material) => {
  const alcohol = `ratio.alcohol.${material.alcohol}`;
  const ingredient1 = `ratio.ingredient.${material.ingredients[0]}`;
  const ingredient2 = `ratio.ingredient.${material.ingredients[1]}`;

  return [
    {
      $match: {
        degree: {
          $gte: material.minDegree,
          $lte: material.maxDegree,
        },
      },
    },
    {
      $match: {
        [alcohol]: {
          $ne: undefined,
        },
      },
    },
    {
      $match: {
        [ingredient1]: {
          $ne: undefined,
        },
      },
    },
    {
      $match: {
        [ingredient2]: {
          $ne: undefined,
        },
      },
    },
    {
      $project: {
        _id: 0,
        category: 0,
        flavor: 0,
        ratio: 0,
        owner: 0,
        official: 0,
        likes: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    },
  ];
};

export const secondSearch = () => {};
