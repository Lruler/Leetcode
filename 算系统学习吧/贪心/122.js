/* 
给定一个数组 prices， 其中 prices[i] 是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。 你可以尽可能地完成更多的交易（ 多次买卖一支股票）。

注意： 你不能同时参与多笔交易（ 你必须在再次购买前出售掉之前的股票）。

*/

var maxProfit = function (prices) {
    const n = prices.length
    let a = 0
    for (let i = 0; i < n - 1; i++) {
        if (prices[i] < prices[i + 1]) a += prices[i + 1] - prices[i]
    }
    return a
};

console.log(maxProfit([7, 6, 4, 3, 1]))