/* 
一群孩子站成一排， 每一个孩子有自己的评分。 现在需要给这些孩子发糖果， 规则是如果一 个孩子的评分比自己身旁的一个孩子要高， 那么这个孩子就必须得到比身旁孩子更多的糖果;
所 有孩子至少要有一个糖果。 求解最少需要多少个糖果。
输入输出样例
输入是一个数组， 表示孩子的评分。 输出是最少糖果的数量。
Input: [1, 0, 2]
Output: 5
*/

var candy = function (ratings) {
    const len = ratings.length
    let candies = Array(len).fill(1);
    for (let i = 1; i < len; ++i) {
        if (ratings[i - 1] < ratings[i]) candies[i] = candies[i - 1] + 1
    }
    console.log(candies)
    for (let i = len - 1; i > 0; --i) {
        if (ratings[i] < ratings[i - 1]) candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1)
    }
    console.log(candies)
    return candies.reduce(((a, b) => a + b))
};

console.log(candy([1,0,2]))