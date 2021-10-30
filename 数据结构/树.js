const defaultEquals = (a, b) => {
    return a === b
}
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor(equalsFn = defaultEquals) {
        this.root = null
        this.equalsFn = equalsFn
    }
    // 插入一个节点
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    inserNode(node, key) {
        if (key <= node.key) {
            if (node.left = null) node.left = new Node(key)
            else this.insertNode(node.left, key)
        } else {
            if (node.right == null) node.right = new Node(key)
            else this.inserNode(node.right, key)
        }
    }
}