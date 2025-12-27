/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    missingNum(arr) {
        // code here
        let n=arr.length
        // let a=n+1
        // let sum= a*(a+1)/2
        // let s1=0
        // for (let i=0; i<n;i++){
        //     s1=s1+arr[i]
        // }
        // return sum-s1
        
        let xor1=0
        let xor2=0
        for (let i=1;i<n+2;i++){
            xor1=xor1^i
        } 
        for (let i=0;i<n;i++){
            xor2=xor2^arr[i]
        } 
        return xor1^xor2
    }
}
