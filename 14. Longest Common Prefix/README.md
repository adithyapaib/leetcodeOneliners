## 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

## Python3

```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        return ''.join(ch[0] for ch in zip(*strs) if len(set(ch))==1)
```