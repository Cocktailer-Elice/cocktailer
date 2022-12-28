export const listsQuery = () => {
  /*   전체 6개씩   */

  const $facet: any = {};

  const Array = ['sweet', 'dry', 'refreshing', 'fruit', 'smoothie', 'hot'];

  Array.map((e) => {
    $facet[e] = [
      { $match: { category: e, official: true } },
      { $limit: 10 },
      { $sort: { createdAt: -1 } },
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
      { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
    ];
  });

  return { $facet: $facet };
};

export const findCocktailIdQuery = (id: number) => {
  /*   id   */
  return [
    {
      $match: {
        id: id,
      },
    },
    {
      $project: {
        _id: 0,
        createdAt: 0,
        deletedAt: 0,
        updatedAt: 0,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'owner',
        foreignField: 'id',
        as: 'owner',
        pipeline: [
          {
            $project: {
              _id: 0,
              myLikes: 0,
              isApplyingBartender: 0,
              isPasswordTemporary: 0,
              name: 0,
              email: 0,
              password: 0,
              birthday: 0,
              avatarUrl: 0,
              isAdmin: 0,
              points: 0,
              createdAt: 0,
              updatedAt: 0,
              deletedAt: 0,
              tel: 0,
            },
          },
        ],
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
      $unwind: {
        path: '$owner',
      },
    },
  ];
};

export const getCocktailLikesUserQuery = (
  userId: number,
  cocktailId: number,
) => {
  return [
    {
      $match: {
        id: cocktailId,
        likesUser: {
          [userId]: true || false,
        },
      },
    },
    {
      $project: {
        _id: 0,
        id: 0,
        owner: 0,
        category: 0,
        name: 0,
        official: 0,
        flavor: 0,
        degree: 0,
        img: 0,
        ratio: 0,
        content: 0,
        likes: 0,
        createdAt: 0,
        deletedAt: 0,
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
  ];
};

export const findCategoryAndSearchQuery = (reqData: object) => {
  /*   카테고리 / 검색   */

  const makeMatchForm = () => {
    const obj: any = {};
    if ('category' in reqData) {
      obj.category = reqData.category;
    }
    if ('keyword' in reqData) obj.name = { $regex: reqData.keyword };
    if ('official' in reqData)
      obj.official = reqData.official === 'true' ? true : false;

    return obj;
  };

  return [
    {
      $match: makeMatchForm(),
    },
    { $sort: { createdAt: -1 } },
    {
      $project: {
        _id: 0,
        flavor: 0,
        degree: 0,
        ratio: 0,
        likes: 0,
        content: 0,
        createdAt: 0,
        deletedAt: 0,
        updatedAt: 0,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'owner',
        foreignField: 'id',
        as: 'owner',
        pipeline: [
          {
            $project: {
              _id: 0,
              id: 0,
              name: 0,
              email: 0,
              password: 0,
              birthday: 0,
              avatarUrl: 0,
              isAdmin: 0,
              points: 0,
              createdAt: 0,
              updatedAt: 0,
              deletedAt: 0,
              tel: 0,
            },
          },
        ],
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
      $unwind: {
        path: '$owner',
      },
    },
  ];
};

export const cocktailRankingsQuery = () => {
  return [
    {
      $sort: {
        likes: -1,
      },
    },
    { $limit: 10 },
    {
      $project: {
        _id: 0,
        category: 0,
        flavor: 0,
        degree: 0,
        ratio: 0,

        content: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'owner',
        foreignField: 'id',
        as: 'owner',
        pipeline: [
          {
            $project: {
              _id: 0,
              id: 0,
              name: 0,
              email: 0,
              password: 0,
              birthday: 0,
              avatarUrl: 0,
              isAdmin: 0,
              createdAt: 0,
              updatedAt: 0,
              deletedAt: 0,
              tel: 0,
              points: 0,
            },
          },
        ],
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
      $unwind: {
        path: '$owner',
      },
    },
  ];
};
