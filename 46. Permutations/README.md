## 46. Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

## Python3

```python
class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
            return reduce(lambda P, n: [p[:i] + [n] + p[i:] for p in P for i in range(len(p)+1)],nums[[]])
    }
};
```