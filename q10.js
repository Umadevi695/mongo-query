// 1. Display Top 3 Highest Paid Employees
db.employees.aggregate([{ $sort: { monthlySalary: -1 } }, { $limit: 3 }]);

// 2. Display Annual Salary of Each Employee
db.employees.aggregate([
  {
    $project: {
      name: 1,
      monthlySalary: 1,
      annualSalary: { $multiply: ["$monthlySalary", 12] },
    },
  },
]);

// 3. Display Band Based on Age (Band A if age > 40, else Band B)
db.employees.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      band: {
        $cond: { if: { $gt: ["$age", 40] }, then: "Band A", else: "Band B" },
      },
    },
  },
]);
