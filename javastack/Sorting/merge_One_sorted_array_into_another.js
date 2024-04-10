function merge_one_into_another(arr1, arr2) {
    const first = arr1;
    const second = arr2;
    
    let p1 = first.length - 1;
    let p2 = p1;
    let i = second.length - 1;
    
    while(i >= 0) {
        if(first[p1] > second[p2]) {
            let temp = first[p1];
            first[p1] = second[i];
            second[i] = temp;
            if(p1 > 0) p1--;
        } else {
            let temp = second[p2];
            second[p2] = second[i];
            second[i] = temp;
            if(p2 > 0) p2--;
        }
        
        i--;
    }

    return second;
}
