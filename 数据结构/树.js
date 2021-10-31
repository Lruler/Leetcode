class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    // 插入一个节点
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    insertNode(node, key) {
        if (key < node.key) {
            if (node.left == null) {
                node.left = new Node(key)
            }
            else this.insertNode(node.left, key)
        } else {
            if (node.right == null) node.right = new Node(key)
            else {this.insertNode(node.right, key)}
        }
    }
    // 中序遍历 （从小到大的顺序   访问所有节点，对树的排序要用到
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    // 先序遍历 （优先于后代节点的顺序访问每个节点 应用打印一个结构化的文档
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    // 后序遍历 （先访问节点的后代节点，再访问节点本身， 应用计算目录及其子目录所有文件所占空间大小
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
}

let tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

const printNode = (value) => console.log(value)
tree.preOrderTraverse(printNode)
tree.inOrderTraverse(printNode)








