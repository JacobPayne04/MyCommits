const dp = new Array(value + 1).fill(1000005);//  Create a dynamic programming array with length value + 1, filled with a large number (1000005) initially bc ensures that during the DP process, any valid solution will replace this initial large number, and it helps in correctly identifying the minimum number of coins needed for each amount during the computation.

for (let c = 0; c < coins.length; c++) {
    if (coins[c] <= a && 1 + dp[a - coins[c]] < dp[a]) {
        dp[a] = 1 + dp[a - coins[c]];
    }
}