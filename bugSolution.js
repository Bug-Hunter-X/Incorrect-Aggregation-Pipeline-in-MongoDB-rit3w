```javascript
// Corrected aggregation pipeline
aggregate([{
  $match: { "status": "pending" }
}, {
  $group: { _id: "$userId", total: { $sum: { $toDouble: "$amount" } } }
}, {
  $project: { _id: 0, userId: "$_id", total: 1 }
}])
```