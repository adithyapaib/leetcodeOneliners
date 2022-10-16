## 172. Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

## Python3

```python
class Solution {
public:
    int trailingZeroes(int n) {
        return 0 if n == 0 else n / 5 + self.trailingZeroes(n / 5)
    }
};
```
## C++

```cpp
int trailingZeroes(int n) {
    return n == 0 ? 0 : n / 5 + trailingZeroes(n / 5);
}
```
