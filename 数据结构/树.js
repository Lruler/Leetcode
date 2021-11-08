class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
const printNode = (value) => {
    console.log(value)
}
// 二叉树
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
    // 后序遍历 （先访问节点的后代节点，再访问节点本身， 应用计算目录及其子目录所有文件所占空间大小
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
    // 搜索最小值
    min() {
        return this.minNode(this.root)
    }
    minNode(node) {
        let current = node
        while (current != null && current.left != null) current = current.left
        return current
    }
    // 搜索最大值
    max() {
        return maxNode(this.root)
    }
    maxNode(node) {
        let current = node
        while (current != null && current.right != null) current = current.right
        return right
    }
    // 搜索特定的值
    search(key) {
        return this.searchNode(this.root, key)
    }
    searchNode(node, key) {
        if (node == null) {
            return false
        }
        if (key < node.key) {
            return this.searchNode(node.left, key)
        }
        else if (key > node.key) {
            return this.searchNode(node.right, key)
        }
        else {
            return true
        }
    } 
    // 移除一个节点
    remove(key) {
        return this.root = this.removeNode(this.root, key)
    }
    removeNode(node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key)
            return node
        }
        else {
            if (node.left == null && node.right == null) {
                node = null
                return node
            }
            if (node.left == null) {
                node = node.right
                return node
            } else if (node.right == null) {
                node = node.left
                return node
            }
            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        } 
    }
}
// 自平衡树
class AVLTree extends BinarySearchTree {
    constructor() {
        this.root = null
    }
    getNodeHeight(node) {
        if (node == null) {
            return -1
        }
        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        )
    }

}
// 算了先不写，是为了防止二叉树某一边过度衍生出来的

// 红黑树
// tree.preOrderTraverse(printNode)
// tree.inOrderTraverse(printNode)


console.log('B' > 'A');
// t.postOrderTraverse(printNode)
// t.inOrderTraverse(printNode)





