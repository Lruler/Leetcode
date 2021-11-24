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

const garph = new Graph()
const ver = ['A', 'B', 'C', 'D', 'E']
for (let i = 0; i < ver.length; i++) {
    garph.addVertex(ver[i])
}
garph.addEdge('A', 'B')
garph.addEdge('A', 'C')
garph.addEdge('A', 'E')
garph.addEdge('B', 'D')
garph.addEdge('C', 'E')
garph.addEdge('C', 'D')
garph.addEdge('D', 'E')

console.log(garph.toString())