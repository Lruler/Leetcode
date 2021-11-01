/* 
给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

 

示例 1：

输入：s = "abpcplea",dictionary  = ["ale","apple","monkey","plea"]
输出："apple"
*/

var findLongestWord = function(s, dictionary) {
    let res = "";
    for (const t of dictionary) {
        let i = 0, j = 0;
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                ++i;
            }
            ++j;
        }
        if (i === t.length) {
            if (t.length > res.length || (t.length === res.length && t < res)) {
                res = t;
            }
        }
    }
    return res;
};

let s = "abpcplea"
let dictionary = ["ale","apple","monkey","plea"]
console.log(findLongestWord(s, dictionary));
