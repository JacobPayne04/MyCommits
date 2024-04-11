function two_sum(numbers, target) {
    // Write your code here.
    let map1 = new Map()
    for(let i=0;i<numbers.length;i++) {
        if(map1.has(target-numbers[i])) return [i, map1.get(target-numbers[i])]
        else map1.set(numbers[i], i)
    }
    
    return [-1,-1];
}