const coinChange = (coins, amount) => {
  // 初始化备忘录,用Infinity填满备忘录，Infinity说明该值不可以用硬币凑出来
  const dp = new Array(amount + 1).fill(Infinity)

  // 设置初始条件为 0
  dp[0] = 0

  for (var i = 1; i <= amount; i++) {
    for (const coin of coins) {
      // 根据动态转移方程求出最小值
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        console.log(dp);
      }
    }
  }

  // 如果 `dp[amount] === Infinity`说明没有最优解返回-1,否则返回最优解
  return dp[amount] === Infinity ? -1 : dp[amount]
}

// console.log(coinChange([1,2,5],6));

// 全排列
const allSort = (nums) => {
  let res = []
  backTrack = (path) => { 
    if(nums.length === path.length){
      res.push([...path])  
      return
    } 

    for(let i = 0; i < nums.length; i++){
      /** 排除不合法的选择 */
      if(path.indexOf(nums[i]) !== -1){
        continue
      }
      /** 前序遍历 */
      path.push(nums[i])

      backTrack(path)

      // 后序遍历
      path.pop()

    }
  }
  backTrack([])
  return res
}

// n皇后

const Queen = (n) => {
  let board = new Array(n).fill('.'.repeat(n))
  let res = []
  isValid = (board, row, col) => {
    let len = board.length
    //检查列皇后是否冲突
    for(let i = 0; i < len; i++){
      if(board[i][col] === 'Q')
        return false
    }
    // 检查左对角线冲突
    for(let i = row - 1,j = col + 1; i >= 0 && j < n; i--, j++){
      if(board[i][j] === 'Q'){
        return false
      }

    }
    // 检查右对角线冲突，
    for(let i = row - 1,j = col - 1; i >= 0 && j >= 0; i--, j--){
      if(board[i][j] === 'Q'){
        return false
      }
    }
    return true
  }
  repalceAt = (str,index,target) => { 
    const strAry = str.split('');
    strAry[index] = target
    return strAry.join('')
  }
  backTrack = (board, row) => { 
    // 终止条件
    if(row === board.length){
      res.push([...board])
      return
    }
    let len = board.length
    for(let col = 0; col < len; col++){
      if(!isValid(board,row,col)){
        continue;
      }
       
      //前序
      board[row] = repalceAt(board[row],col,'Q')

      backTrack(board, row + 1)

      //后序
      board[row] =repalceAt(board[row],col,'.')
    }
  }  
  backTrack(board,0)
  return res
}

// 

var longestCommonPrefix = function(strs) { 
  let short = strs[0].length
  //找出最短的字符串
  for(let i = 1; i < strs.length; i++){
       short = strs[i].length > strs[i - 1].length ? strs[i - 1].length: strs[i].length
  }

  let relPue = []

  for(let j = 0; j < short; j++){
    let pre = []
    for(let i = 0; i < strs.length; i++){
      if(j == 0) pre.push(strs[i][j])
      else pre.push(strs[i][j-1]+strs[i][j])
    }
    if(j == 0){
      for(let i = 0; i < pre.length - 1; i++){
        if(pre[i] != pre[i + 1])
          return ''
      }
    }

    else{
      for(let i = 0; i < pre.length - 1; i++){
        if(pre[i] != pre[i + 1])
          return relPue[0]
      }
    }

    relPue = pre
  }
  
  return relPue[0]
};

// console.log(longestCommonPrefix(["flower","flow","flight"]));

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
  console.log(dp);
  return dp[n]
};

minSteps(4)
minSteps(10)