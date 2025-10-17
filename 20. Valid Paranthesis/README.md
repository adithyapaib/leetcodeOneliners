## 14. Valid Paranthesis

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
## Python3

```python
class Solution:
    def isValid(self, s: str) -> bool:
        return stack=[]; m={')':'(',']':'[','}':'{'}; return not any((stack.pop() if stack and stack[-1]==m.get(c) else stack.append(c)) for c in s) and not stack
```