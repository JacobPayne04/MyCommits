/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {//iterate over prices
        if (buyPrice > prices[i]) {//if first index of prices i is less then current prices i 
            buyPrice = prices[i];//makes new buy price tbe new 
        }

        profit = Math.max(profit, prices[i] - buyPrice);//profit calculated with 
        //largest value in prices[i] - smallest vlaue in prices[i] = profit
    }

    return profit;    //return new vlaue
};