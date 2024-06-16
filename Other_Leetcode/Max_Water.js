/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //two pointers
let left = 0;
let right = height.length-1
let maxWater = 0;

while(left < right){
    let width = (right - left); //right pointer - left = area for area clac

    let maxArea = Math.min(height[left], height[right]) * width; //area calc the min hieght fo both heights times our width

    maxWater = Math.max(maxWater,maxArea) //new max area calcualted if its bigger it reaplces current one

    if(height[left] <= height[right]){// if left is bigger move left pointer forward and if not move right pointer back
        left++;
    } else {
        right--
    }
}
return maxWater

};