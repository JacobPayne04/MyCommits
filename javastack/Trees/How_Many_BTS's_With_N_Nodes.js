
/**
 * @param {int32} n
 * @return {int64}
 */
function how_many_bsts(n) {
    // Write your code here.
    /*
		with memoization, the function runs with
		unique values n = 0 1 2 3 ... n-1 
		each time it runs a loop = n times

		so total time = 0 + 1 + 2 +... n-1 = O(N^2)
		space = O(N) for the memo and call stack space

	*/

  let memo = {};
  function recursion(n) {
    // if (lo > hi) return 0;
    if (n <= 1) return 1;

    if (n in memo) return memo[n];

    let total = 0;
    for (let i = 0; i < n; ++i) {
      // pick i as the root
      // total = number of ways to form left * number of ways to form right tree
      total += recursion(i) * recursion(n - i - 1);
    }
    memo[n] = total;
    return total;
  }

  return recursion(n);
}