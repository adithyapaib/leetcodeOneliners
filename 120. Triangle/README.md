
## 120. Triangles

Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.




## Python3

```python
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
         return reduce(lambda a,b:[f+min(d,e)for d,e,f in zip(a,a[1:],b)],t[::-1])[0]

```

