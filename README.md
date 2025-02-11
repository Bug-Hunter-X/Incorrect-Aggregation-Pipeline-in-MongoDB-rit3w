# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error in MongoDB aggregation pipelines and its solution.
The bug involves an incorrect aggregation pipeline that leads to unexpected results when summing numerical values.  The solution corrects the pipeline to ensure accurate calculations by explicitly converting the field to a number using the `$toDouble` operator.

## Bug Description
The original pipeline attempts to sum the `amount` field for users with `status: "pending"`. However, due to the potential for non-numeric values in the `amount` field, the aggregation fails to produce the expected result. This can occur if the field contains strings, null values, or other data types not directly compatible with the sum operator.

## Solution
The solution involves adding a `$toDouble` operator to the pipeline to explicitly convert the `amount` field to a double before summing. This ensures that only numerical values are considered during the summation process, leading to the correct results.