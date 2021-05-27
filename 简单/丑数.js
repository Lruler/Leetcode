// 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。

// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。



var isUgly = function (n) {
    if (n <= 0) return false; if (n == 1) return true;
    if (n > 0) {
    if (n % 2 == 0)
    return isUgly(n / 2);
    if (n % 3 == 0)
    return isUgly(n / 3);
    if (n % 5 == 0)
    return isUgly(n / 5);
    if (n % 2 != 0 && n % 5 != 0 && n % 3 != 0)
    return false;
    }
    };