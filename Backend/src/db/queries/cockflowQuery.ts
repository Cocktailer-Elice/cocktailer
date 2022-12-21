export const cockflowQueries = {
  findById: (cockflowId: number) => [
    {
      $match: {
        id: cockflowId,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'owner',
        foreignField: 'id',
        as: 'owner',
      },
    },
    {
      $unwind: {
        path: '$owner',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'comments',
        localField: 'id',
        foreignField: 'cockflowId',
        as: 'comments',
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'comments.owner',
        foreignField: 'id',
        as: 'commentsOwner',
      },
    },
    {
      $unwind: {
        path: '$comments.writer',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $unset: [
        '_id',
        'updatedAt',
        'owner._id',
        'owner.name',
        'owner.email',
        'owner.password',
        'owner.birthday',
        'owner.tel',
        'owner.avatarUrl',
        'owner.isAdmin',
        'owner.updatedAt',
        'comments.owner',
        'comments.updatedAt',
        'comments.cockflowId',
        'commentsOwner._id',
        'commentsOwner.name',
        'commentsOwner.email',
        'commentsOwner.password',
        'commentsOwner.birthday',
        'commentsOwner.tel',
        'commentsOwner.avatarUrl',
        'commentsOwner.createdAt',
        'commentsOwner.updatedAt',
        'commentsOwner.isAdmin',
      ],
    },
  ],
};
