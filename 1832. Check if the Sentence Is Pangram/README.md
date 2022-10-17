## 1832. Check if the Sentence Is Pangram
A **pangram** is a sentence where every letter of the English alphabet appears at least once.

Given a string `sentence` containing only lowercase English letters, return `true` _if `sentence` is a **pangram**, or_ `false` _otherwise_.

## Python

```python
class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return 'abcdefghijklmnopqrstuvwxyz' == ''.join(sorted(set(sentence))).strip()
```
