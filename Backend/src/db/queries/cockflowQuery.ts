export const cockflowQueries = {
  findById: (cockflowId: number) => [
    {
      $match: {
        id: cockflowId,
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
            $match: {
              isSubComment: null,
            },
          },
        ],
      },
    },
    {
      $project: {
        'comments.cockflowId': 0,
        'comments.createdAt': 0,
        'comments.updatedAt': 0,
      },
    },
    {
      $unwind: {
        path: '$comments',
        preserveNullAndEmptyArrays: true,
        includeArrayIndex: 'commentsCount',
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
        preserveNullAndEmptyArrays: true,
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
        commentsCount: {
          $last: '$commentsCount',
        },
      },
    },
    {
      $lookup: {
        from: 'comments',
        localField: 'id',
        foreignField: 'cockflowId',
        as: 'subComments',
        pipeline: [
          {
            $match: {
              isSubComment: true,
            },
          },
        ],
      },
    },
    {
      $project: {
        'subComments.isSubComment': 0,
        'subComments.cockflowId': 0,
        'subComments.createdAt': 0,
        'subComments.updatedAt': 0,
      },
    },
    {
      $unwind: {
        path: '$subComments',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'subComments.owner',
        foreignField: 'id',
        as: 'subComments.owner',
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
        path: '$subComments.owner',
        preserveNullAndEmptyArrays: true,
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
          $first: '$comments',
        },
        subComments: {
          $push: '$subComments',
        },
        commentsCount: {
          $first: '$commentsCount',
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
