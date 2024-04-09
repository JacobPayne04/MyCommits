function pair_sum_sorted_array(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    
    while (start < end) {
        let value = numbers[start] + numbers[end];
        if (value === target) {
            return [start, end];
        } else if (value > target) {
            end--;
        } else {
            start++;
        }
    }
    
    return [-1, -1];
}