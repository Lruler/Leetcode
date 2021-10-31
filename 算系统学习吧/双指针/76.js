/* 
题目描述
给定两个字符串 S 和 T ，求 S 中包含 T 所有字符的最短连续子字符串的长度，同时要求时间 复杂度不得超过 O(n)。
输入输出样例
输入是两个字符串 S 和 T，输出是一个 S 字符串的子串。 Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
*/

var minWindow = function (s, t) {
    // 创建左指针
    let l = 0;
    // 创建右指针
    let r = 0;
    // 最后需要返回的最小长度子串
    let res = "";
    // 创建字典表
    const m = new Map();
    // 遍历需要匹配的字符
    for (let i = 0; i < t.length; i++) {
      const c = t[i];
      // 放入字典表
      m.set(c, m.has(c) ? m.get(c) + 1 : 1);
    }
    // 创建记录需要匹配的字符种类
    let needType = m.size;
    // 遍历字符串
    while (r < s.length) {
      // 获取当前字符
      const c = s[r];
      // 如果是需要匹配的字符
      if (m.has(c)) {
        // 更新字典表中的次数 - 1
        m.set(c, m.get(c) - 1);
        //  如果次数为0，证明这个字符种类在当前窗口已经集齐了，needType - 1
        if (m.get(c) === 0) needType -= 1;
      }
      // 当needType为0，证明所有需要匹配的字符都已经在当前滑动窗口中
      while (needType === 0) {
        const c2 = s[l];
        // 记录当前滑动窗口的字符
        let newRes = s.slice(l, r + 1);
        // 当新的窗口中的字符长度小于上次的字符长度时，更新结果
        // !res 是在结果值为空的时候需要更新一下第一次匹配的值
        if (!res || newRes.length < res.length) res = newRes;
        // 如果左指针移动过程中出现，字典中的值证明需要匹配的字符已经脱离了当前窗口
        if (m.has(c2)) {
          // 更新表中需要出现的次数
          m.set(c2, m.get(c2) + 1);
          // 更新needType
          if (m.get(c2) === 1) needType += 1;
        }
        // 移动左指针
        l++;
      }
      // 移动右指针
      r++;
    }
    // 返回结果值
    return res;
  };
  let s = "ADOBECODEBANC", t = "ABC"
  minWindow(s,t)