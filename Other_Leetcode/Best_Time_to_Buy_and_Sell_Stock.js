/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        }
        else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    
    return maxProfit;
};







// second solution

/**
 * @param {number[]} prices
 * @return {number}
 */                                //       i
 var maxProfit = function(prices) { //    [ [7][1][5][3][6][4] ] prices

    let min = prices[0]
    let max = min
    let value = 0
  
    for(let i = 0; i < prices.length;i++){
      if(i != prices.length-1 && prices[i] <= min){
          min = prices[i]
          max = min
      } else if( prices[i] > max){
          max = prices[i]
      }
      value = Math.max(value,max-min)
    }
    return value
  };
  
    