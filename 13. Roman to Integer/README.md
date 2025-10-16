## 13. Roman to Integer


Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

## Python

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        
        return sum([{'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}[c] for c in s]) - 2*sum(v1 < v2 for v1, v2 in zip([{'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}[c] for c in s], [{'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}[c] for c in s][1:]))
```
