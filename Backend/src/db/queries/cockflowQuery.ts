export const cockflowQueries = {
  findById: (cockflowId: number) => [
    {
      $match: {
        id: cockflowId,
        deletedAt: null,
      },
    },
    {
      $project: {
        _id: 0,
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
            },
          },
        ],
      },
    },
    {
      $unwind: {
        path: '$owner',
      },
    },
    {
      $lookup: {
        from: 'comments',
        localField: 'id',
        foreignField: 'cockflowId',
        as: 'comments',
        pipeline: [
          {
            $project: {
              cockflowId: 0,
              createdAt: 0,
              updatedAt: 0,
              deletedAt: 0,
            },
          },
        ],
      },
    },
    {
      $unwind: {
        path: '$comments',
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'comments.owner',
        foreignField: 'id',
        as: 'comments.owner',
        pipeline: [
          {
            $project: {
              _id: 0,
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
            },
          },
        ],
      },
    },
    {
      $unwind: {
        path: '$comments.owner',
      },
    },
    {
      $set: {
        'comments.idString': {
          $toString: '$comments._id',
        },
      },
    },
    {
      $lookup: {
        from: 'comments',
        localField: 'comments.idString',
        foreignField: 'parentCommentId',
        as: 'comments.subComments',
        pipeline: [
          {
            $project: {
              cockflowId: 0,
              createdAt: 0,
              updatedAt: 0,
              deletedAt: 0,
              isSubComment: 0,
            },
          },
        ],
      },
    },
    {
      $match: {
        'comments.isSubComment': null,
      },
    },
    {
      $group: {
        _id: '$id',
        id: {
          $first: '$id',
        },
        owner: {
          $first: '$owner',
        },
        title: {
          $first: '$title',
        },
        content: {
          $first: '$content',
        },
        createdAt: {
          $first: '$createdAt',
        },
        comments: {
          $push: '$comments',
        },
      },
    },
    {
      $project: {
        _id: 0,
        'comments.idString': 0,
      },
    },
  ],
};
