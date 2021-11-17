const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class StackArray {
    constructor() {
        this.items = []
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
        return this.items[this.items.length - 1]
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
rl.question('入栈的串:', (str) => {
    rl.question('出栈的串:', (str1) => {
        let newStr = ''
        const len = str.length
        let stackIn = new StackArray()
        let stackOut = new StackArray()
        let i = 0
        let j = 0
        for (; i < len; i++) {
            if (stackIn.peek() == str1[i]) {
                let a = stackIn.pop()
                stackOut.push(a)
            } else {
                for (; j < len; j++) {
                    stackIn.push(str[j])
                    if (stackIn.peek() == str1[i]) {
                        let b = stackIn.pop()
                        stackOut.push(b)
                        j++
                        break;
                    }
                }
            }
        }

        for (let k = 0; k < stackOut.size(); k++) {
            newStr += stackOut.items[k]
        }
        console.log(newStr === str1)
        rl.close();
    })
    
});