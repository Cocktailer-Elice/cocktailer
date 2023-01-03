export const findByCockgorithm = (
  category: string,
  minDegree: number,
  maxDegree: number,
  alcohol: string,
  beverage: string,
  ingredient: string,
) => {
  return [
    {
      $match: {
        category: category,
        degree: {
          $gte: minDegree,
          $lte: maxDegree,
        },
        [`ratio.alcohol.${alcohol}`]: {
          $ne: null,
        },
        [`ratio.ingredient.${beverage}`]: {
          $ne: null,
        },
        [`ratio.ingredient.${ingredient}`]: {
          $ne: null,
        },
      },
    },
    {
      $project: {
        _id: 0,
        owner: 0,
        flavor: 0,
        category: 0,
        official: 0,
        likes: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    },
    {
      $set: {
        img: {
          $concat: [
            'https://cocktailer.s3.ap-northeast-2.amazonaws.com/cocktails/',
            '$img',
          ],
        },
      },
    },
    {
      $project: {
        ratio: 0,
      },
    },
  ];
};
