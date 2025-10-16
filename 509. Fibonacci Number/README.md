## 509. Fibonacci Number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
## Python

```python
class Solution:
    def fib(self, n: int) -> int:
        return lambda n: reduce(lambda x, _: x+[x[-1]+x[-2]], range(n-1), [0,1])[n]
```
