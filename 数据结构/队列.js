// 单队列是一种遵循先进先出(FIFO)原则的数据结构
class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    // 向队列尾部添加新元素
    enqueue(e) {
        this.items[this.count] = e
        this.count++
    }
    // 移除队列尾部元素
    dequeue() {
        if(this.isEmpty()) return undefined

        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek() {
        if(this.isEmpty()) return undefined

        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.count - this.lowestCount === 0
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    toString() {
        if (this.isEmpty()) return ''

        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }

        return objString
    }
}

// 双端队列 可同时从前端和后端添加或移除元素的特殊队列 队列+栈的数据结构
class Deque {
    constructor() {
        this.count = 0
        this.lowestCount
        this.items = {}
    }
}