/* 
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

 

示例 1:

输入: s = "aba"
输出: true
*/

var validPalindrome = function(s, flag = true) {
    let l = 0, r = s.length - 1;
    while (l < r && s[l] === s[r]) l++, r--;
    if (r <= l) return true;
    if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
    return false;
};

console.log(validPalindrome('ebcbbececabbacecbbcbe'))