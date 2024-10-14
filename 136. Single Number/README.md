## 136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

## Python

```python
class Solution:
    return 2 * sum(set(nums)) - sum(nums)
```
