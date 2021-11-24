const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a = ''
const printfNode = (key, c = a) => {
    a += key
}
let i = -1
let nodeList = []
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
        this.father = null
    }
}
class Tree {
    constructor() {
        this.root = null
    }
    // 后序遍历
    preOrderTraverse(callback) {
        a = ''
        this.preOrderTraverseNode(this.root, callback)
        let n = a.replace(/#/g, "");
        console.log('后序遍历', n)
    }
    preOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
    // 中序遍历
    inOrderTraverse(callback) {
        a = ''
        this.inOrderTraverseNode(this.root, callback)
        let n = a.replace(/#/g, "");
        console.log('中序遍历', n)
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
            if (node.left) { // 如果它的左子树不为空
                queue.push(node.left); // 将左子树的根节点入队
            }
            if (node.right) { // 如果它的右子树不为空
                queue.push(node.right); // 将右子树的根节点入队
            }
        }
        result = result.replace(/#/g, '')
        console.log('层次遍历:', result)
        return result;
    }
    // 建立二叉链表
    createbiTree(keys) {
        this.createbiTreeNode(keys, this.root)
    }
    createbiTreeNode(keys, node) {
        nodeList = nodeList.filter((n) => {
            return n.left === null || n.right === null
        })
        const len = nodeList.length
        const root = nodeList[len - 1]
        i++
        if (keys[i] == '#') {
            node = new Node('#')
            root.left === null ? root.left = node : root.right = node
        } else {
            node = new Node(keys[i])
            if (i === 0) {
                this.root = node
            } else {
                root.left === null ? root.left = node : root.right = node
            }
            nodeList.push(node)
            this.createbiTreeNode(keys, node.left)
            this.createbiTreeNode(keys, node.right)
        }
    }
}

let tree = new Tree()

rl.question('请输入你想插入的数据:', (p) => {
    let keys = p
    tree.createbiTree(keys)
    tree.inOrderTraverse(printfNode)
    tree.preOrderTraverse(printfNode)
    tree.levelOrderTraverse()
    rl.close();
});