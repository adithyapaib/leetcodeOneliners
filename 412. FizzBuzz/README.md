## 412. FizzBuzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

## Python3

```python
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        return [('Fizz'*(i%3==0)+'Buzz'*(i%5==0) or str(i)) for i in range(1,n+1)]
```