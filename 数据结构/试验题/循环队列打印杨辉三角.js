// 定义循环队列的类
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class CircularQueue {
    constructor(k) {
        this.list = Array(k) // 创建一个长度为k的空数组
        this.front = 0 // 保存头部指针位置
        this.real = 0 // 保存尾部指针位置
        this.max = k // 保存该数组最大长度，也就是k 
    }
    Front() {
        if (this.isEmpty()) {
            return -1
        }
        return this.list[this.front]
    }
    Rear() {
        if (this.isEmpty()) {
            return -1
        }
        let val = this.real - 1 >= 0 ? this.real - 1 : this.max - 1
        return this.list[val]
    }
    enQueue(value) {
        if (!this.isFull()) {
            this.list[this.real] = value
            this.real = (this.real + 1) % this.max
            return true
        } else {
            return false
        }
    }
    deQueue() {
        if (!this.isEmpty()) {
            const e = this.list[this.front]
            this.list[this.front] = ''
            this.front = (this.front + 1) % this.max
            return e
        } else {
            return false
        }
    }
    isEmpty() {
        if (this.real === this.front && !this.list[this.front]) {
            return true
        } else {
            return false
        }
    }
    isFull() {
        if (this.real === this.front && !!this.list[this.front]) {
            return true
        } else {
            return false
        }
    }
}
// 打印杨辉三角的函数
const logYangHui = (row) => {
    row += 1
    let yang = new CircularQueue(row + 2)
    let i, s, e, k
    console.log(`1`);
    console.log(`\n`)
    yang.enQueue(0)
    yang.enQueue(1)
    yang.enQueue(1)
    k = 1
        while (k < row) {
            // 0 作为转行符，入队列
            yang.enQueue(0)
            do {
                //队头元素出队列
                s = yang.deQueue()
                //取新的队头元素
                e = yang.Front()
                //如果所取元素非 0，则输出，否则做转行操作
                if (e !== -1 && e) {
                    console.log(e, '!');
                } else {
                    console.log("\n");
                }
                yang.enQueue(s + e)
            } while (e != 0); //一旦 e 值为 0，即做转行操作，退出循环，开始新一行的排列
            k++;
        }
        e = yang.Front()
        yang.deQueue()
        while (!yang.isEmpty()) {
            e = yang.Front()
            yang.deQueue()
            console.log(e);
        }
}

rl.question('请输入打印的行数:', (p) => {
    p = +p
    logYangHui(p)
    rl.close()
});