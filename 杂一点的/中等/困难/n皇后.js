var solveNQueens = function(n) {
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
  };