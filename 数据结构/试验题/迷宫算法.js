const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mazeSearch = function (maze) {
    var matrix = maze
    var m = matrix.length
    var n = matrix[0].length
    // 此数组用来记录当前节点是否被访问过
    var visited = new Array(m).fill('').map(() => new Array(n).fill(false))
    var arr = [] // 队列
    var dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1]
    ]
    // 当前节点可走的4个方向，分别对应右，左，上，下

    // 起点入队
    arr.push({
        x: 0,
        y: 0,
        path: '(0,0)'
    })
    visited[0][0] = true

    while (arr.length) {
        var current = arr.shift() // 当前方向上节点出队
        // 判断是否到终点
        if (current.x == m - 1 && current.y == n - 1) {
            console.log(current.path) // 打印当前路径
            break;
        }
        // 开始遍历
        for (var dir of dirs) {
            var nx = current.x + dir[0]
            var ny = current.y + dir[1]

            // 分别判断当前节点是否是有效节点
            if (nx < m && // 迷宫边界
                nx >= 0 &&
                ny < n &&
                ny >= 0 &&
                matrix[nx][ny] == 0 && // 是否通路0：通路1：障碍
                visited[nx][ny] == false) { // 是否已访问过

                // 根据当前路径记录走过的路径
                var _path = current.path + `-> (` + nx + ',' + ny + `) `
                // 节点入队
                arr.push({
                    x: nx,
                    y: ny,
                    path: _path
                })
                // 标记已访问过
                visited[nx][ny] = true
            }
        }
    }
}
let a = [
    [0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 1],
    [0, 1, 1, 1, 0, 0, 0, 0],
]
let i = 0
const repeat = () => {
    if (i == 5) {
        mazeSearch(a)
        rl.close()
        return
    }
    i++
    rl.question('', () => {
        repeat()
    })
}
rl.question('请输入迷宫行数与列数:', () => {
    rl.question('请输入迷宫内容:\n', () => {
        repeat()
    })
});