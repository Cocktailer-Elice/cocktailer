export const userQueries = {
  findById: (userId: number) => [
    {
      $match: {
        id: userId,
      },
    },
    {
      $lookup: {
        from: 'cocktails',
        localField: 'id',
        foreignField: 'owner',
        as: 'cocktails',
      },
    },
    {
      $lookup: {
        from: 'cockflows',
        localField: 'id',
        foreignField: 'owner',
        as: 'cockflows',
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
            },
          },
        ],
      },
    },
  ],
};
