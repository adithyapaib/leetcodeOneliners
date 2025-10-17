## 168. Excel Sheet Column Title
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
## Python

```python
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        return ''.join(chr((n-1)%26 + 65) for n in divmod(n-1,26)[::-1])
```
