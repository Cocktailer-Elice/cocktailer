export const cocktailQueries = (
  id: number | null,
  category: string | null,
  official: boolean | null,
) => {
  console.log('쿼리', id, category, official);

  const listsArray = ['sweet', 'dry', 'refreshing', 'fruit', 'smoothie', 'hot'];

  const $facet: any = {};

  if (id === null && category === null) {
    listsArray.map((e) => {
      $facet[e] = [
        { $match: { category: e, official: true } },
        { $limit: 6 },
        { $sort: { createdAt: -1 } },
        { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
      ];
    });

    return { $facet: $facet };
  }

  if (typeof id === 'number') {
    return [
      { $match: { id: id } },
      { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
    ];
  }

  if (typeof category === 'string') {
    return [
      {
        $match: {
          category: category,
          official: official !== null ? official : false,
        },
      },
      { $sort: { createdAt: -1 } },
      { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
    ];
  }
};
