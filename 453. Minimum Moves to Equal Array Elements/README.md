## 453. Minimum Moves to Equal Array Elements

Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment n - 1 elements of the array by 1.

## C++

```cpp
int minMoves(vector<int>& nums) {
    return accumulate(begin(nums), end(nums), 0L) - nums.size() * *min_element(begin(nums), end(nums));
}
```
