/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a,b)=>a-b)
    
    const median = nums[Math.floor(nums.length/2)]
    
    let moves = 0
    nums.forEach(num=>{
        moves+=Math.abs(num-median)
    })
    return moves
    };


    //sort nums
    //find median number bc that is the number that will return the min amt
    //then for each number just num - meidan and return answer