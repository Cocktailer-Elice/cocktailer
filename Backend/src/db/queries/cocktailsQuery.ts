export const lists = () => {
  /*   전체 6개씩   */

  const $facet: any = {};

  const Array = ['sweet', 'dry', 'refreshing', 'fruit', 'smoothie', 'hot'];

  Array.map((e) => {
    $facet[e] = [
      { $match: { category: e, official: true } },
      { $limit: 6 },
      { $sort: { createdAt: -1 } },
      { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
    ];
  });

  return { $facet: $facet };
};

export const findCocktailId = (id: number) => {
  /*   id   */
  return [
    {
      $match: { id: id },
    },
    { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
  ];
};

export const findCategoryAndSearch = (reqData: object) => {
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
    { $sort: { id: -1, createdAt: -1 } },
    { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
  ];
};
