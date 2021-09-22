// 比较链表元素是否相等的默认函数
const defaultEquals = (a, b) => {
    return a === b
}
// 定义节点类
class Node{
    constructor(element){
        this.element = element
        this.next = null
        this.prev = null
    }
}
// 定义单项链表
class linkList{
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
        while(currentNode && (currentNode !== item)){
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
            }
            else {
                const pre =  this.getElementAt (index - 1)
                const current = previous.next
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
        for (let i = 0; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}