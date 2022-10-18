## 58. Length of Last Word
Given a string `s` consisting of words and spaces, _return the length of the **last** word in the string._

A **word** is a maximal substring consisting of non-space characters only.

## Python

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.strip().split()[-1])
```
