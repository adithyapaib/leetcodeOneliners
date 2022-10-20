## 125. Valid Palindrome
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` _if it is a **palindrome**, or_ `false` _otherwise_.
## Python

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        return ''.join(ch.lower() for ch in s if ch.isalnum()) == ''.join(ch.lower() for ch in s if ch.isalnum())[::-1]
```
