print("Top 3 Highest Paid Employees:");
db.employees
  .aggregate([{ $sort: { monthlySalary: -1 } }, { $limit: 3 }])
  .forEach((doc) => printjson(doc));

print("\nAnnual Salary of Each Employee:");
db.employees
  .aggregate([
    {
      $project: {
        name: 1,
        annualSalary: { $multiply: ["$monthlySalary", 12] },
      },
    },
  ])
  .forEach((doc) => printjson(doc));

print("\nBand Based on Age:");
db.employees
  .aggregate([
    {
      $project: {
        name: 1,
        age: 1,
        band: {
          $cond: { if: { $gt: ["$age", 40] }, then: "Band A", else: "Band B" },
        },
      },
    },
  ])
  .forEach((doc) => printjson(doc));
