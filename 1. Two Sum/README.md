## 1. Two Sum


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Python3

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        return [(i,j) for i in range(len(nums)) for j in range(i+1,len(nums)) if nums[i]+nums[j]==target][0]

```
