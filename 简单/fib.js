var fib = function(n) {
    let res = new Array(n + 1)
    res[0] = 0
    res[1] = res[2] = 1
    for(let i = 3; i < res.length; i++){
        res[i] = res[i - 1] + res[i - 2]
    }
    return res[n]
};