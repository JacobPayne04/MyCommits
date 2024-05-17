
/**
 * @param {list_int32} numbers
 * @return {list_int32}
 */
function segregate_evens_and_odds(numbers) {
    let i = 0;
    let j = numbers.length - 1;
    
    while (i < j) {
        if (numbers[i] % 2 == 1) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
            
            j--;
        } else {
            i++;
        }
    }
    return numbers;
}
