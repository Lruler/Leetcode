"use strict";

/* 
题目描述
给定一个非负整数， 求它的开方， 向下取整。
4.3 查找区间 输入输出样例
输入一个整数， 输出一个整数。
Input: 8
Output: 2
*/
// 二分查找的方法
var sqrt = function sqrt(a) {
  if (a == 0) return a;
  var l = 1,
      r = a,
      mid,
      sqrt;

  while (l <= r) {
    mid = l + (r - l) / 2;
    sqrt = a / mid;

    if (sqrt == mid) {
      return mid;
    } else if (mid > sqrt) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return r;
};

console.log(sqrt(4));