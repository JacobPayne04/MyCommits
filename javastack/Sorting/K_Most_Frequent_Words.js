
/**
 * @param {int32} k
 * @param {list_str} words
 * @return {list_str}
 */
function k_most_frequent(k, words) {
    words.sort()
    let freq = []
    let count = 1
    for(let i = 0; i < words.length; i++){
        if(words[i] == words[i + 1]){
            count++
        }
        else{
            freq.push([words[i], count])
            count = 1
        }
    }
    freq.sort((a , b) => b[1] - a[1])
    let result = freq.map(x => x[0])
    return result.slice(0,k)
}
