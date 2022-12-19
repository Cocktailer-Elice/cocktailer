export const cocktailQueries = (
  queries: string,
  id: number | null,
  category: string | null,
) => {
  console.log('쿼리', queries, id, category);
  if (queries === 'main') {
    return {
      $facet: {
        sweet: [
          {
            $match: {
              category: 'sweet',
            },
          },
          {
            $limit: 6,
          },
          {
            $sort: {
              createdAt: -1,
            },
          },
        ],
        dry: [
          {
            $match: {
              category: 'dry',
            },
          },
          {
            $limit: 6,
          },
          {
            $sort: {
              createdAt: -1,
            },
          },
        ],
        refreshing: [
          {
            $match: {
              category: 'refreshing',
            },
          },
          {
            $limit: 6,
          },
          {
            $sort: {
              createdAt: -1,
            },
          },
        ],
        fruit: [
          {
            $match: {
              category: 'fruit',
            },
          },
          {
            $limit: 6,
          },
          {
            $sort: {
              createdAt: -1,
            },
          },
        ],
        smoothie: [
          {
            $match: {
              category: 'smoothie',
            },
          },
          {
            $limit: 6,
          },
          {
            $sort: {
              createdAt: -1,
            },
          },
        ],
        hot: [
          {
            $match: {
              category: 'hot',
            },
          },
          {
            $limit: 6,
          },
          {
            $sort: {
              createdAt: -1,
            },
          },
        ],
      },
    };
  }
  if (queries === 'id') {
    return {
      $match: {
        id: id,
      },
    };
  }
  if (category != null) {
    return {
      $match: {
        category: category,
      },
    };
  }
};
