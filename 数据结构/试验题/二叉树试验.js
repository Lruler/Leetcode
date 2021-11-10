const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a =''
const printfNode = (key, c = a) => {
    a += key
}
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
class Tree {
    constructor() {
        this.root = null
    }
    insert(key) {
        if (key === '#') return
        if (this.root === null) {
            this.root = new Node(key)
        }
        else this.insertNode(this.root, key)
    }
    insertNode(node, key) {
        if (node.left === null) {
            node.left = new Node(key)
        }
        else if (node.right === null) {
            node.right = new Node(key)
        }
        else this.insertNode(node.left, key)
    }
    // 先序遍历
    preOrderTraverse(callback) {
        a = ''
        this.preOrderTraverseNode(this.root, callback)
        console.log('先序遍历', a)
    }
    preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    // 中序遍历
    inOrderTraverse(callback) {
        a = ''
        this.inOrderTraverseNode(this.root, callback)
        console.log('中序遍历', a)
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    // 层次遍历
    levelOrderTraverse(node = this.root) {
        let queue = [];
        let result = '';
        queue.push(node); // 根节点入队
        while (queue.length) {
            node = queue.shift(); // 出队
            result += `${node.key}`; // 访问该节点
            if (node.left) { // 如果它的右子树不为空
                queue.push(node.left); // 将左子树的根节点入队
            }
            if (node.right) { // 如果它的右子树不为空
                queue.push(node.right); // 将右子树的根节点入队
            }
        }
        console.log('层次遍历：', result)
        return result;
    }
}

let b = new Tree()



rl.question('请输入你想插入的数据:', (p) => {
    let string = p
    for (let i = 0; i < string.length; i++) {
        b.insert(string[i])
    }
    b.preOrderTraverse(printfNode)
    b.inOrderTraverse(printfNode)
    b.levelOrderTraverse()
    rl.close();
});
