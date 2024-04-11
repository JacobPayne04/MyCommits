var lastRemaining = function(n) {
    let head = 1;
    let left = 1;
    let step = 1;
    let remain = n;

    while(remain > 1){
        if(left || remain % 2){
            head += step;
        }
        step *= 2;
        left =! left;
        remain = ~~(remain / 2);
    }
   return head;
};