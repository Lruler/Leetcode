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
        const nodes = [];
        if (startId != null) {
            const stack = [];
            stack.push([startId]);
            while (stack.length !== 0) {
                const sides = stack.pop();
                const side = sides[0];

                if (nodes.every(item => item[0] !== side)) {
                    // 注册节点
                    nodes.push(sides);
                    // 结束点退出
                    if (side === endID) break;
                    const children = this.getAdjoinVertexs(side);
                    children.slice().reverse().forEach((item) => {
                        stack.push([item, side]);
                    });
                }
            }
        }
        return nodes;
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
            console.log(v)
            this.dfsV(explored, visited, stack)
        }
    }
    toString() {
        let str = ''
        for (let i = 0; i < this.adjoinArray.length; i++) {
            str += (i + 1) % 5 ? this.adjoinArray[i] + ' ' : this.adjoinArray[i] + '\n'
        }
        console.log(str)
    }
}



// 创建矩阵
const demo = new Adjoin([0, 1, 2, 3, 4])

// 注册邻接点
demo.setAdjoinVertexs(1, [2, 3])
demo.setAdjoinVertexs(2, [1, 4])
demo.setAdjoinVertexs(4, [2])
demo.setAdjoinVertexs(3, [1])
demo.setAdjoinVertexs(0, [])


demo.toString()

console.log(demo.bfs(1))