/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let table = {}
    let results = []

    strs.forEach(word => {

        const sortedWord = word.split('').sort().join('')

        if(!table[sortedWord]){
            table[sortedWord] = []
        }

        table[sortedWord].push(word)
    })

    for(let key in table){
        if(table.hasOwnProperty(key)){
            results.push(table[key])
        }
    }

    return results
};