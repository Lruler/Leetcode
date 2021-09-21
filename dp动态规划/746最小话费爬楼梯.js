// 简单
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    const dp = new Array(n + 1);
    dp[0] = dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];
};

// fn = min{f(n-1)+nums[n],f(n-2)+(nums[n-2])}
//  dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);