/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let arr = [...nums1,...nums2]
    arr.sort((a,b)=>a-b)
    
    if(arr === 1) return arr[0]
    
    const mid = Math.floor(arr.length/ 2)
    
    if(arr.length % 2 == 0){
        let res =((arr[mid-1] + arr[mid])/2)
        return res
    } else {
        arr[mid]
    }
    
    
    
    };