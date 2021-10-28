/* 
字符串 S 由小写字母组成。 我们要把这个字符串划分为尽可能多的片段， 同一字母最多出现在一个片段中。 返回一个表示每个字符串片段的长度的列表。
示例：
输入： S = "ababcbacadefegdehijhklij"
输出：[9, 7, 8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij"
的划分是错误的， 因为划分的片段数较少。
*/

// 贪心版
// var partitionLabels = function (s) {
//     const last = new Array(26);
//     const length = s.length;
//     const codePointA = 'a'.codePointAt(0);
//     console.log(codePointA)
//     for (let i = 0; i < length; i++) {
//         last[s.codePointAt(i) - codePointA] = i;
//     }
//     const partition = [];
//     let start = 0,
//         end = 0;
//     for (let i = 0; i < length; i++) {
//         end = Math.max(end, last[s.codePointAt(i) - codePointA]);
//         if (i == end) {
//             partition.push(end - start + 1);
//             start = end + 1;
//         }
//     }
//     return partition;
// };
// Map版
var partitionLabels = function (s) {
    var map = new Map();
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        if (!map.has(ch)) {
            map.set(ch, [i, i]);
        } else {
            map.set(ch, [map.get(ch)[0], i]);
        }
    }
    var res = [],
        i = 0;
    while (i < s.length) {
        var j = map.get(s[i])[1],
            k = i;
        console.log(j)
        while (++k < j) {
            j = Math.max(j, map.get(s[k])[1]);
        }
        res.push(j - i + 1);
        i = j + 1;
    }
    return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))