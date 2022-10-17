## 5. Longest Palindromic Substring


Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.


## Python3

```python
class Solution(object):
    def longestPalindrome(self, s):
        return s if (s == s[::-1]) else max([s[start:end+1] for start in range(len(s)) for end in range(len(s)-1, start, -1) if(s[start:end] == s[end:start:-1])]+[""]+[s[0]], key=len) 
```
