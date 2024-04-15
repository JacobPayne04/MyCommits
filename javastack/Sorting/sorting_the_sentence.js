var sortSentence = function(s) {
    let res=[]
    let arr=s.split(' ')
    for(let i=0;i<arr.length;i++){
        let index=arr[i][arr[i].length-1]-1
        res[index]=arr[i].substring(0,arr[i].length-1)
    }
    return res.join(' ')
};