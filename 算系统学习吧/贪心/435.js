
/* 
题目描述
给定多个区间，计算让这些区间互不重叠所需要移除区间的最少个数。起止相连不算重叠。
输入输出样例
输入是一个数组，数组由多个长度固定为 2 的数组组成，表示区间的开始和结尾。输出一个 整数，表示需要移除的区间数量。
Input: [[1,2], [2,4], [1,3]]
Output: 1 */
var eraseOverlapIntervals = function (intervals) {
    let remove = 0
    if (intervals.length <= 1) return 0
    intervals.sort((a, b) => a[1] - b[1])
    let prev = intervals[0][1]
    for (let i = 1; i < intervals.length; ++i) {
        if (intervals[i][0] < prev) {
            ++remove;
        } else {
            prev = intervals[i][1];
        }
    }
    return remove
};

eraseOverlapIntervals(
    [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3]
    ])