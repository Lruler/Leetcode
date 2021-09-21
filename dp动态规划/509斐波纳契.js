//简单
var fib = function(n) {
    if(n == 1 || n ==2)
        return 1
    if(n == 0)
        return 0
    let pur = 1;
    let cur = 1;
    for(let i = 3; i <= n; i++){
        sum = pur + cur
        pur = cur
        cur = sum
    }
    return sum
};