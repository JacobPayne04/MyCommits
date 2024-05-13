
/**
 * @param {int32} n
 * @return {list_str}
 */
let strings = []
function helper(slate,n){
    if(n == 0) {
        strings.push(slate)
    } else{
        helper(slate+"0",n-1)
        helper(slate+"1",n-1)
    }
}


function get_binary_strings(n) {
  helper("",n)
  return strings
}
