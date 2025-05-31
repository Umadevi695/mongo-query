db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "empId",
      foreignField: "empId",
      as: "ordersInfo",
    },
  },
  {
    $unwind: "$ordersInfo",
  },
  {
    $group: {
      _id: { name: "$name", email: "$email" },
      totalOrderValue: { $sum: "$ordersInfo.orderValue" },
    },
  },
  {
    $project: {
      _id: 0,
      name: "$_id.name",
      email: "$_id.email",
      totalOrderValue: 1,
    },
  },
]);
