## 485. Max Consecutive Ones

Given a binary array nums, return the maximum number of consecutive 1's in the array.
## Python

```python
max_consecutive_ones = lambda nums: max(map(len, ''.join(map(str, nums)).split('0')))
```
