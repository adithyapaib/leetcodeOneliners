
## 1207. Unique Number of Occurrences


Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.


## Python3

```python
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        return len(collections.Counter(arr).values()) == len(set(collections.Counter(arr).values()))
        

```

