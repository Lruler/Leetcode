class Adjoin {
    constructor(vertex) {
        this.vertex = vertex;
        this.quantity = vertex.length;
        this.init();
    }

    init() {
        this.adjoinArray = Array.from({
            length: this.quantity * this.quantity
        });
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
            console.log(v)
            visited.push(v)
        }
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
}



// 创建矩阵
const demo = new Adjoin([1, 2, 3, 4, 5, 6, 7, 8, 9])

// 注册邻接点
demo.setAdjoinVertexs(3, [2, 1, 6])
demo.setAdjoinVertexs(2, [3, 1, 4])
demo.setAdjoinVertexs(1, [3, 2, 4])
demo.setAdjoinVertexs(4, [2, 1, 9])
demo.setAdjoinVertexs(9, [4])
demo.setAdjoinVertexs(6, [3, 5])
demo.setAdjoinVertexs(5, [6, 8, 7])
demo.setAdjoinVertexs(7, [5, 8])
demo.setAdjoinVertexs(8, [7, 5])

console.log(demo.dfsV([],[],[3]))