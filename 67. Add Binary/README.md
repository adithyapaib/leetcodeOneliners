## 877. Stone Game
Given two binary strings a and b, return their sum as a binary string.

## C++
```python
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(eval('0b' + a) + eval('0b' + b))[2:]
```