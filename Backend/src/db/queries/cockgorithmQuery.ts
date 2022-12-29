export const findByCockgorithm = (
  category: string,
  minDegree: number,
  maxDegree: number,
  alcohol: string,
) => {
  return [
    {
      $match: {
        category: category,
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
      $match: {
        degree: {
          $gte: minDegree,
          $lte: maxDegree,
        },
      },
    },
    {
      $match: {
        [`ratio.alcohol.${alcohol}`]: {
          $ne: null,
        },
      },
    },
    {
      $set: {
        img: {
          $concat: [
            'https://cocktailer.s3.ap-northeast-2.amazonaws.com/seeun-test/',
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

export const secondSearch = () => {};
