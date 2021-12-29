const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let dfsStr = ''
class Adjoin {
    constructor(vertex) {
        this.vertex = vertex;
        this.quantity = vertex.length;
        this.init();
    }

    init() {
        this.adjoinArray = Array.from({
            length: this.quantity * this.quantity
        }).fill(0);
    }
    getVertexRow(id) {
        const index = this.vertex.indexOf(id);
        const col = [];
        this.vertex.forEach((item, pIndex) => {
            col.push(this.adjoinArray[index + this.quantity * pIndex]);
        });
        return col;
    }
    getAdjoinVertexs(id) {
        return this.getVertexRow(id).map((item, index) => (item ? this.vertex[index] : '')).filter(Boolean);
    }
    setAdjoinVertexs(id, sides) {
        const pIndex = this.vertex.indexOf(id);
        sides.forEach((item) => {
            const index = this.vertex.indexOf(item);
            this.adjoinArray[pIndex * this.quantity + index] = 1;
        });
    }
    dfs(startId) {
        let explored = []
        let visited = []
        this.dfsV(explored, visited, [startId])
        for (let i = 0; i < this.vertex.length; i++) {
            if (!visited.includes(this.vertex[i])) console.log(this.vertex[i])
        }
        console.log(dfsStr)
    }
    bfs(startId) {
        let str = ''
        let queue = [startId]
        let explored = []
        let visited = []
        while (queue.length !== 0) {
            let v = queue.shift()
            if (!explored.includes(v)) explored.push(v)
            let adjoin = demo.getAdjoinVertexs(v)
            for (let i = 0; i < adjoin.length; i++) {
                if (!explored.includes(adjoin[i]) && !visited.includes(adjoin[i])) {
                    explored.push(adjoin[i])
                    queue.push(adjoin[i])
                }
            }
            str += v + ' '
            visited.push(v)
        }
        for (let i = 0; i < this.vertex.length; i++) {
            if (!visited.includes(this.vertex[i])) console.log(this.vertex[i])
        }
        console.log(str)
    }
    dfsV(explored, visited, stack) {
        while (stack.length !== 0) {
            let v = stack.pop()
            if (!explored.includes(v)) explored.push(v)
            let adjoin = demo.getAdjoinVertexs(v)
            for (let i = 0; i < adjoin.length; i++) {
                if (!explored.includes(adjoin[i]) && !visited.includes(adjoin[i])) {
                    explored.push(adjoin[i])
                    stack.push(adjoin[i])
                }
            }
            visited.push(v)
            dfsStr += v + " "
            this.dfsV(explored, visited, stack)
        }
    }
    toString() {
        let str = ''
        for (let i = 0; i < this.adjoinArray.length; i++) {
            str += (i + 1) % 10 ? this.adjoinArray[i] + ' ' : this.adjoinArray[i] + '\n'
        }
        console.log(str)
    }
}

var demo
var end = []
const saveGraph = () => {
    if (end.length === 1) {
        console.log('')
        demo.toString()
        console.log('广度遍历结果')
        demo.bfs('3')
        console.log('深度遍历结果')
        demo.dfs('3')
        rl.close();
        return
    }
    rl.question('', (p) => {
        let adj = p.split(",")
        if (adj.length !== p.length) {
            let adjF = adj[1].trim().split(" ")
            demo.setAdjoinVertexs(adj[0], adjF)
        } else {
            end = adj
            demo.setAdjoinVertexs(adj, [])
        }
        saveGraph()
    });
}

rl.question('请输入图的节点数\n', (n) => {
    let a = []
    for (let i = 0; i < +n; i++) {
        a.push(`${i}`)
    }
    demo = new Adjoin(a)
    rl.question('请输入你想插入的数据\n', (p) => {
        let adj = p.split(",")
        if (adj.length !== p.length) {
            let adjF = adj[1].trim().split(" ")
            demo.setAdjoinVertexs(adj[0], adjF)
        } else {
            end = adj
            demo.setAdjoinVertexs(adj, [])
        }
        saveGraph()
    });
})

// 注册邻接点
// demo.setAdjoinVertexs(3, [2, 1, 6])
// demo.setAdjoinVertexs(2, [3, 1, 4])
// demo.setAdjoinVertexs(1, [3, 2, 4])
// demo.setAdjoinVertexs(4, [2, 1, 9])
// demo.setAdjoinVertexs(9, [4])
// demo.setAdjoinVertexs(6, [3, 5])
// demo.setAdjoinVertexs(5, [6, 8, 7])
// demo.setAdjoinVertexs(7, [5, 8])
// demo.setAdjoinVertexs(8, [7, 5])

// console.log(demo.dfsV([],[],[3]))