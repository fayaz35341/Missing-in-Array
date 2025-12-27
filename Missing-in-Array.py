class Solution:
    def missingNum(self, arr):
        # code here
        n=len(arr)
        # a=n+1 
        # sum=a*(a+1)//2
        # s1=0
        # for i in range(n):
        #     s1+=arr[i]
        # return sum-s1
        
        xor1=0
        xor2=0
        for i in range(1,n+2):
            xor1^=i
        for i in arr:
            xor2^=i
        return xor1^xor2
