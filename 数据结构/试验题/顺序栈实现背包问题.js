const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class StackArray {
    constructor(arr = []) {
        this.items = arr
    }
    // 推元素到栈顶 
    push(e) {
        this.items.push(e)
    }
    // 移除栈顶元素
    pop() {
        return this.items.pop()
    }
    // 返回/查看栈顶元素
    peek() {
        return this.items[this.itmes.length - 1]
    }
    // 判断栈是否为空
    isEmpty() {
        return this.items.length === 0
    }
    // 返回栈的长度
    size() {
        return this.items.length
    }
    // 清空栈
    clear() {
        return this.items = []
    }
    // 输出栈
    stackTraverse() {
        return this.items
    }
}
// 背包函数
const knapsack = (pack, target) => {
    const packStack = new StackArray();
    const n = pack.length; // 背包数量
    for (let k = 0; !packStack.isEmpty() || k < n; k++) {
        for (; target > 0 && k < n;) {
            if (target - pack[k] >= 0) {
                packStack.push(k)
                target -= pack[k]
            }
            k++
        }
        if (target == 0) {
            let w = packStack.stackTraverse() // 输出栈
            let newPack = []
            for (let i = 0; i < w.length; i++) {
                newPack.push(pack[w[i]])
            }
            console.log(newPack)
        }
        k = packStack.pop()
        target += pack[k]
    }
}
rl.question('请输入物品:', (p) => {
    let arr = p.split(" ")
    arr = arr.map(i => +i)
    rl.question('请输入target:', (t) => {
        t = +t
        knapsack(arr, t)
        rl.close();
    });
});