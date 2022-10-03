## 2185. Counting Words With a Given Prefix
You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.

## Python
```python
	class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        c=0
        for i in words:
            if(i.startswith(pref)):
                c+=1
        return c
 ```
