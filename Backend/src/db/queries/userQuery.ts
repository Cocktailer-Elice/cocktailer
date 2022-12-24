export const userQueries = {
  findById: (userId: number) => [
    {
      $match: {
        id: userId,
      },
    },
    {
      $project: {
        _id: 0,
        name: 0,
        email: 0,
        password: 0,
        nickname: 0,
        birthday: 0,
        tel: 0,
        avatarUrl: 0,
        currentPoints: 0,
        isAdmin: 0,
        isBartender: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    },
    {
      $lookup: {
        from: 'cocktails',
        localField: 'id',
        foreignField: 'owner',
        as: 'cocktails',
        pipeline: [
          {
            $limit: 6,
          },
          {
            $project: {
              _id: 0,
              owner: 0,
              ratio: 0,
              updatedAt: 0,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: 'cockflows',
        localField: 'id',
        foreignField: 'owner',
        as: 'cockflows',
        pipeline: [
          {
            $limit: 6,
          },
          {
            $project: {
              _id: 0,
              owner: 0,
              updatedAt: 0,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: 'comments',
        localField: 'id',
        foreignField: 'owner',
        as: 'comments',
        pipeline: [
          {
            $lookup: {
              from: 'cockflows',
              localField: 'cockflowId',
              foreignField: 'id',
              as: 'parentCockflow',
              pipeline: [
                {
                  $project: {
                    _id: 0,
                    updatedAt: 0,
                  },
                },
              ],
            },
          },
          {
            $limit: 6,
          },
          {
            $project: {
              owner: 0,
              updatedAt: 0,
            },
          },
        ],
      },
    },
    {
      $project: {
        id: 0,
      },
    },
  ],
};
