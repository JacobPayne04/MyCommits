function dutch_flag_sort(balls) {
    // All balls before i are R
    let i = 0;
    // All balls between j - 1 and i are G
    let j = 0;
    // All balls after k are B
    let k = balls.length - 1;
    
    while(j <= k) {
        if(balls[j] === 'R') {
            swap(balls, i++, j++);
        } else if(balls[j] === 'B') {
            swap(balls, j, k--);
        } else {
            j++;
        }
    }
    
    return balls;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
