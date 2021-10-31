/* 
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
示例 1：

输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
 */

var judgeSquareSum = function(c) {
    let l = 0
    let r = Math.floor(Math.sqrt(c))
    if (c === 0) return true
    while (l <= r) {
        if (l*l + r*r === c) return true
        else if (l*l + r*r > c) r--
        else l++
    }
    return false
};
console.log(judgeSquareSum(8));