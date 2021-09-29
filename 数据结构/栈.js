// 栈是一种遵从后进先出的LIFO原则的有序集合
// 基于数组
class StackArray {
    constructor() {
        this.itmes = []
    }
    // 推元素到栈顶 
    push(e) {
        this.items.push(e) 
    }
    // 移除栈顶元素
    pop() {
        return this.items.pop
    }
    // 返回/查看栈顶元素
    peek() {
        return this.items[this.itmes.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    clear() {
        return this.items = []
    }
}

// 基于对象
class Stack {

    constructor() {
        this.count = 0
        this.itmes = {}
    }

    push(e) {
        this.items[this.count] = e
        this.count++
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.itmes[this.count]
        delete this.itmes[this.count]
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count]
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count === 0
    }

    clear() {
        this.items = {}
        this.count = 0
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[0]}`
        for (let i = 0; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}