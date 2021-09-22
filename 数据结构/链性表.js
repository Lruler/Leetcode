class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}


class linkList{

    constructor() {
        this.size = 0;  // 单链表的长度
        this.head = new Node('head');  // 表头节点
        this.currNode = '';  // 当前节点的指向
}

    find(item){
        let currentNode = this.head;

        while(currentNode && (currentNode !== item)){
            currentNode = currentNode.next
        }
        
        return currentNode
    }

    insert(){

    }

    remover(){

    }

    append(){

    }

    findLast(){
        let currentNode = this.head

        while(currentNode.next)
            currentNode = currentNode.next
        
        return currentNode
    }

    isEmpty(){

    }

    show(){

    }

    getLength(){

    }

    advance(n, currentNode = this.head){
        this.currNode = currentNode

        while((n--) &&(this.currNode.next)){
            this.currNode = this.currNode.next 
        }
    }

    display(){

    }

    clear(){

    }

}




