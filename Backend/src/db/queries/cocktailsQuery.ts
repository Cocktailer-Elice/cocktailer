export const cocktailQueries = (
  queries: string,
  id: number | null,
  category: string | null,
  official: string | null,
) => {
  console.log('쿼리', queries, id, category);

  const listsArray = ['sweet', 'dry', 'refreshing', 'fruit', 'smoothie', 'hot'];

  if (queries === 'main') {
    const $facet = listsArray.map((e) => {
      const res = {
        [e]: [
          { $match: { category: e, official: true } },
          { $limit: 6 },
          { $sort: { createdAt: -1 } },
          { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
        ],
      };
      return res;
    });

    return $facet;

    // sweet: [
    //   { $match: { category: 'sweet', official: true } },
    //   { $limit: 6 },
    //   { $sort: { createdAt: -1 } },
    //   { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
    // ],
    // dry: [
    //   { $match: { category: 'dry', official: true } },
    //   { $limit: 6 },
    //   { $sort: { createdAt: -1 } },
    // ],
    // refreshing: [
    //   { $match: { category: 'refreshing', official: true } },
    //   { $limit: 6 },
    //   { $sort: { createdAt: -1 } },
    // ],
    // fruit: [
    //   { $match: { category: 'fruit', official: true } },
    //   { $limit: 6 },
    //   { $sort: { createdAt: -1 } }, //likes 생성일자 filter
    // ],
    // smoothie: [
    //   { $match: { category: 'smoothie', official: true } },
    //   { $limit: 6 },
    //   { $sort: { createdAt: -1 } },
    // ],
    // hot: [
    //   { $match: { category: 'hot', official: true } },
    //   { $limit: 6 },
    //   { $sort: { createdAt: -1 } },
    // ],
    // userCocktail: [
    //   { $match: { official: false, likes: { $gt: 25 } } },
    //   { $limit: 6 },
    //   { $sort: { createdAt: -1 } },
    // ],

    if (queries === 'id') {
      return {
        $match: { id: id },
      };
    }

    if (category != null) {
      return {
        $match: { category: category, official: Boolean(official) },
      };
    }
  }
};
