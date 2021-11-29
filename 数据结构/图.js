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

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
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
class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected; //是否有向
        this.vertices = [];  // 点集
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
const ver = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < ver.length; i++) {
    graph.addVertex(ver[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

BFS(graph, ver[0], logVer)
DFS(graph, logVer)

