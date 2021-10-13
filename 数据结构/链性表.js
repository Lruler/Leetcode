// 比较链表元素是否相等的默认函数
const defaultEquals = (a, b) => {
    return a === b
}
// 定义节点类
class Node {
    constructor(element){
        this.element = element
        this.next = null
        this.prev = null
    }
}
// 定义单向链表 不带头节点
class LinkList {
    constructor(equalsFn = defaultEquals) {
        this.size = 0;  // 单链表的长度
        this.currNode = '';  // 当前节点的指向
        this.head = undefined; // 头节点
        this.equalsFn = equalsFn
}
    // 返回链表长度
    size () {
        return this.size
    }
    // 查找元素
    find (item) {
        let currentNode = this.head;
        while(currentNode && (currentNode.element !== item)){
            currentNode = currentNode.next
        }
        return currentNode
    } 
    // 根据索引查找元素
    getElementAt (index) {
        if (index >= 0 && index <= this.size) {
            let node = this.head
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }
    // 返回元素的索引
    indexOf (element) {
      let current = this.head
      for (let i = 0; i < this.size && current != null; i++) {
          if (this.equalsFn(element, current.element)) {
              return i
          }
          current = current.next
      }
      return -1
    }
    // 插入元素
    insert (element, index) {
        if (index >= 0 && index <= this.size) {
            const node = new Node (element)
            if (index === 0) {
                const current = this.head
                node.next = current
                this.head = node
            }
            else {
                const pre =  this.getElementAt (index - 1)
                const current = pre.next
                node.next = current
                pre.next = node
            }
            this.size++
            return true
        }
        return false
    }   
    // 移除元素 按索引
    removeAt (index) {
            if (index === 0) {
                this.head = current.next
            } 
            else {
                const pre = this.getElementAt (index - 1)
                pre.next = current.next
            }
            this.size--
            return current.element
    }
    // 移除元素 按值
    remove (element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    // 添加元素
    push (element) {
        const node = new Node(element)
        let current
        if(this.head == undefined) this.head = node
        else {
            current = this.head
            while(current.next != null)
                current = current.next
            current.next = node
        }
        this.size++
    }
    // 查找最后一个元素
    findLast () {
        let currentNode = this.head

        while(currentNode.next)
            currentNode = currentNode.next
        
        return currentNode
    }
    // 判断链表是否为空
    isEmpty () {
        return this.size === 0
    }
    // 获取头节点
    getHead () {
        return this.head
    }
    // 把链表转换成一个字符串
    toString () {
        if (this.head == null) {
            return ' '
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 0; i < this.size && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}
// 定义双向链表
class DoublyLinkList extends LinkList {
    constructor (equalsFn = defaultEquals) {
        super (equalsFn)
        this.tail = undefined
    }

    //插入 分三种情况 头部 尾部 中间任意部分
    //移除 一样的三种情况
}
// 定义循环链表 就是最后一个节点的尾指针指向头节点
class CircularLinkList extends LinkList {
    constructor (equalsFn = defaultEquals) {
        super (equalsFn)
    }
}
// 定义有序链表。。。

// 定义带头节点的链表
class HeadLinkList {
    constructor(equalsFn = defaultEquals) {
        this.size = 0; // 单链表的长度
        this.currNode = ''; // 当前节点的指向
        this.head = new Node('null'); // 头节点
        this.equalsFn = equalsFn
    }
    // 返回链表长度
    size() {
        return this.size
    }
    // 查找元素
    find(item) {
        let currentNode = this.head;
        while (currentNode && (currentNode.element !== item)) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    // 根据索引查找元素
    getElementAt(index) {
        if (index >= 0 && index <= this.size) {
            let node = this.head
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }
    // 返回元素的索引
    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.size && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i
            }
            current = current.next
        }
        return -1
    }
    // 插入元素
    insert(element, index) {
        if (index >= 0 && index <= this.size) {
            const node = new Node(element)
            if (index === 0) {
                this.head.next = node
            } else {
                const pre = this.getElementAt(index - 1)
                const current = pre.next
                node.next = current
                pre.next = node
            }
            this.size++
            return true
        }
        return false
    }
    // 移除元素 按索引
    removeAt(index) {
        if (index === 0) {
            this.head = current.next
        } else {
            const pre = this.getElementAt(index - 1)
            pre.next = current.next
        }
        this.size--
        return current.element
    }
    // 移除元素 按值
    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    // 添加元素
    push(element) {
        const node = new Node(element)
        let current
            current = this.head
            while (current.next != null)
                current = current.next
            current.next = node
        this.size++
    }
    // 查找最后一个元素
    findLast() {
        let currentNode = this.head

        while (currentNode.next)
            currentNode = currentNode.next

        return currentNode
    }
    // 判断链表是否为空
    isEmpty() {
        return this.size === 0
    }
    // 获取头节点
    getHead() {
        return this.head
    }
    // 把链表转换成一个字符串
    toString() {
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 0; i < this.size && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}




let list = new HeadLinkList()

list.insert('zk', 0)
list.insert('ljz', 1)
list.insert('txn', 2)
list.insert('zyn', 3)
list.push('wff')

console.log(list.toString());