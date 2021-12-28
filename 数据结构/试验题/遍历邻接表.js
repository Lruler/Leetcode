const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}
const initColor = vertices => {
    const color = {}
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE
    }
    return color
}
const logVer = v => console.log(`The vertex:` + v)
// 广度优先 BFS
const BFS = (graph, startVertex, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initColor(vertices)
    let queue = []
    queue.push(startVertex)
    while (queue.length !== 0) {
        const u = queue.shift()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY
                queue.push(w)
            }
        }
        color[u] = Colors.BLACK
        if (callback) {
            callback(u)
        }
    }
}
// 深度优先 DFS
const DFS = (graph, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initColor(vertices)
    const startV = vertices[0]
    const neighbors = adjList.get(startV)
    for (let i = 0; i < neighbors.length; i++) {
        const adj = neighbors[i]
        color[adj] = Colors.GREY
    }
    color[startV] = Colors.GREY
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.GREY) {
            DFSV(vertices[i], color, adjList, callback)
        }
    }
}
const DFSV = (u, color, adjList, callback) => {
    color[u] = Colors.GREY
    if (callback) callback(u)
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (color[w] === Colors.WHITE) {
            DFSV(w, color, adjList, callback)
        }
    }
    color[u] = Colors.BLACK
}
// 邻接表实现图
class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected; //是否有向
        this.vertices = []; // 点集
        this.adjList = new Map(); // 边集————邻接表
    }
    // 添加新定点
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
    }
    // 添加边
    addEdge(v, w) {
        if (!this.adjList.get(v)) {
            this.addVertex(v)
        }
        if (!this.adjList.get(w)) {
            this.addVertex(w)
        }
        this.adjList.get(v).push(w)
        if (!this.isDirected) {
            this.adjList.get(w).push(v)
        }
    }
    // 返回点集
    getVertices() {
        return this.vertices
    }
    // 返回邻接表
    getAdjList() {
        return this.adjList
    }
    // 字符化
    toString() {
        let s = ''
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `
            const neighbors = this.adjList.get(this.vertices[i])
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `
            }
            s += `\n`
        }
        return s
    }
}
const graph = new Graph()
const saveGraph = () => {
    if (graph.vertices.length === z) {
        console.log(' ')
        console.log(graph.toString())
        console.log('BFS遍历结果')
        BFS(graph, '3', logVer)
        console.log('DFS遍历结果')
        DFS(graph, logVer)
        rl.close();
        return
    }
    rl.question('', (p) => {
        let adj = p.split(",")
        if (adj.length !== p.length) {
            let adjF = adj[1].trim().split(" ")
            for (let i = 0; i < adjF.length; i++) {
                graph.addEdge(adj[0], adjF[i])
            }
        } else {
            graph.addVertex(p)
        }
        saveGraph()
    });
}

var z;

rl.question('请输入图的节点数\n', (n) => {
    z = +n
    rl.question('请输入你想插入的数据\n', (p) => {
        let adj = p.split(",")
        if (adj.length !== p.length) {
            let adjF = adj[1].trim().split(" ")
            for (let i = 0; i < adjF.length; i++) {
                graph.addEdge(adj[0], adjF[i])
            }
        }
        else {
            graph.addVertex(p)
        }
        saveGraph()
    });
})