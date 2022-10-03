## 561. Array Partition

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

## Python

```python
	class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        sum=0
        nums.sort(reverse=True)
        for i in range(0,len(nums)-1,2):
            sum+=min(nums[i],nums[i+1])
        return sum
```
