export const cocktailQueries = (reqData: object) => {
  /*   전체 6개 리스트   */
  if (!('id' in reqData) && !('category' in reqData)) {
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
  }

  const makeMatchForm = () => {
    const obj: any = {};
    if ('id' in reqData) obj.id = reqData.id;
    if ('category' in reqData && reqData.category !== 'undefined') {
      obj.category = reqData.category;
    }

    if ('keyword' in reqData) obj.name = { $regex: reqData.keyword };
    if ('official' in reqData) obj.official = reqData.official;

    return obj;
  };

  console.log(makeMatchForm());

  return [
    {
      $match: makeMatchForm(),
    },
    { $sort: { createdAt: -1 } },
    { $project: { _id: 0, createdAt: 0, deletedAt: 0, updatedAt: 0 } },
  ];
};
