/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = 0
    let fast = 0
    while(true){
        slow = nums[slow]
        fast = nums[nums[fast]]
        if(fast == slow){
            break;
        }
    }
    
    let slow2 = 0
    while(true){
        slow = nums[slow]
        slow2 = nums[slow2]
        if(slow == slow2){
            return slow
        }
    }
    
    };