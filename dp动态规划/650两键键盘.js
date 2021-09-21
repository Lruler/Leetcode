var minSteps = function(n) {
    let dp = new Array(n+1)
    dp[0] = dp[1] = 0;
    for(let i = 2; i <= n; ++i){
        dp[i] = n
        for(let j = 1; j*j <= i; ++j){
            if(i % j == 0 ){
                dp[i] = Math.min(dp[j] + i / j,dp[i]);
                dp[i] = Math.min(dp[i / j] + j,dp[i])
            }
        }
    }
    return dp[n]
};