## 905. Sort Array By Parity
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

## Python

```python
	class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        start=0
        end=len(nums)-1
        while(start<=end):
            if(nums[start]%2==0):
                start+=1
            else:
                if(nums[end]%2==0):
                    t=nums[end]
                    nums[end]=nums[start]
                    nums[start]=t
                end-=1
        return nums
```
