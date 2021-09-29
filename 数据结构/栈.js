// 栈是一种遵从后进先出的LIFO原则的有序集合
class Stack {
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