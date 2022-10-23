## 169. Majority Element
Given an array `nums` of size `n`, return the _majority element_.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

## Python

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        return [ x for x in set(nums) if nums.count(x) > (len(nums)/2)][0]
```
