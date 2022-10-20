
## 367. Valid Perfect Square


Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.


## Python3

```python
class Solution(object):
    def isPerfectSquare(self, num):
        return num**0.5 == int(num**0.5)
```

