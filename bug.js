```javascript
// Incorrect aggregation pipeline causing unexpected results
aggregate([{
  $match: { "status": "pending" }
}, {
  $group: { _id: "$userId", total: { $sum: "$amount" } }
}, {
  $project: { _id: 0, userId: "$_id", total: 1 }
}])
```