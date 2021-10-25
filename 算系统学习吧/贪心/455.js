
/* 
输入两个数组， 分别代表孩子的饥饿度和饼干的大小。 输出最多有多少孩子可以吃饱的数量。
Input: [1, 2], [1, 2, 3]
Output: 2
*/
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let child = 0;
    let cookie = 0;
    while (child < g.length && cookie < s.length) {
        if (g[child] <= s[cookie]) ++child;
        ++cookie
    }
    return child
};