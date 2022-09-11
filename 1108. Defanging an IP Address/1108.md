
## 1108. Defanging an IP Address


Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".




## Python3

```python
class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace(".","[.]")
        

```

