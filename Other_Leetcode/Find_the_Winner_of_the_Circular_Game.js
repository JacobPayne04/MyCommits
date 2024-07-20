/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    const remove = (arr, i) => {
        if (arr.length === 1) {
            return arr[0];
        }
        i = (i + k - 1) % arr.length
        arr.splice(i, 1)
        return remove(arr, i)
    }
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return remove(arr, 0)
};