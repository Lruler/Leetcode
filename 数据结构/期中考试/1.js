const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 function DoublyLinkedList() {
     // Node节点
     function Node(data) {
         this.prev = null;
         this.data = data;
         this.next = null;
     }
     // 属性
     this.head = null; //头节点
     this.tail = null; //尾节点
     this.length = 0; //长度



     /* append(element)：向链表尾部添加一个新的项 */
     DoublyLinkedList.prototype.append = function (data) {
         // 1.根据data创建节点
         var newNode = new Node(data);
         // 2.判断添加的是否为第一个节点
         if (this.length == 0) {
             this.head = newNode;
             newNode.prev = null;
             this.tail = newNode;
         } else {
             this.tail.next = newNode;
             newNode.prev = this.tail;
             this.tail = newNode;
         }
         // 3.length++
         this.length += 1;
     }

     /*  insert(position,element):向链表的特定位置插入一个新的项*/
     DoublyLinkedList.prototype.insert = function (position, data) {
         // 1.越界判断
         if (position < 0 || position > this.length) {
             return false;
         }
         // 2.创建新的节点
         var newNode = new Node(data);
         // 3.判断此时链表是否为空
         if (this.length == 0) {
             this.head = newNode;
             this.tail = newNode;
         } else {
             if (position == 0) {
                 this.head.prev = newNode;
                 newNode.next = this.head;
                 this.head = newNode;
             } else if (position == this.length) {
                 newNode.prev = this.tail;
                 this.tail.next = newNode;
                 this.tail = newNode;
             } else {
                 var current = this.head;
                 var index = 0;
                 while (index < position) {
                     current = current.next;
                     index += 1;
                 }
                 current.prev.next = newNode;
                 newNode.prev = current.prev;
                 newNode.next = current;
                 current.prev = newNode;
             }
         }
         this.length += 1;
         return true;
     }

     /*get(position):获取对应位置的元素 */
     DoublyLinkedList.prototype.get = function (position) {
         // 1.position越界判断
         if (position < 0 || position >= this.length) {
             return null;
         }
         // 2.遍历get元素data
         var current = this.head;
         var index = 0;
         while (index < position) {
             current = current.next;
             index += 1;
         }
         return current.data;
     }

     /*  indexOf(element):返回元素在列表上的索引。如果链表上没有该元素则返回-1 */
     DoublyLinkedList.prototype.indexOf = function (element) {
         // 遍历求值
         var current = this.head;
         var index = 0;
         while (current) {
             if (current.data == element) {
                 return index;
             }
             current = current.next;
             index += 1;
         }
         return -1;
     }

     /*updata（position，element）：更新某个元素*/
     DoublyLinkedList.prototype.updata = function (position, element) {
         //1.position边界值
         if (position < 0 || position >= this.length) {
             return false;
         }
         //2.遍历找到position值并替换
         var current = this.head;
         var index = 0;
         while (index++ < position) {
             current = current.next;
         }
         current.data = element;
         return true;
     }

     /*  removeAt（position）：从链表的特定位置移除一项（根据位置） */
     DoublyLinkedList.prototype.removeAt = function (position) {
         // 越界
         if (position < 0 || position >= this.length) {
             return false;
         }
         //1、判断链表长度是否为1
         if (this.length == 1) {
             this.head = null;
             this.tail = null;
         } else {
             //3、不为1则
             //3.1、position=0
             if (position == 0) {
                 this.head = this.head.next;
                 this.head.prev = null;
                 //3.3、position=this.length-1
             } else if (position == this.length - 1) {
                 console.log('执行');
                 this.tail = this.tail.prev;
                 this.tail.next = null;
                 //3.2、position=middle
             } else {
                 var current = this.head;
                 var index = 0;
                 while (index++ < position) {
                     current = current.next;
                 }
                 current.prev.next = current.next;
                 current.next.prev = current.prev;
             }
         }
         //4.length--
         this.length -= 1;
         return true;
     }


     /* remove(element);从链表移除一项（根据元素） */
     DoublyLinkedList.prototype.remove = function (element) {
         return this.removeAt(this.indexOf(element));
     }

     /* isEmpty():如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。 */
     DoublyLinkedList.prototype.isEmpty = function () {
         return this.length == 0
     }


     /* size():返回链表包含的元素个数。 */
     DoublyLinkedList.prototype.size = function () {
         return this.length;
     }



     /* tostring():输出 */
     DoublyLinkedList.prototype.tostring = function () {
         // 1.定义变量;
         // 2.依次向后遍历，获取节点
         // 3.返回str
         var current = this.head;
         var str = ''
         while (current) {
             str += current.data + ' '
             current = current.next;
         }
         return str;
     }
     /* forwardString():返回正向遍历的节点字符串形式 */
     DoublyLinkedList.prototype.forwardString = function () {
         var current = this.head;
         var str = ''
         while (current) {
             str += current.data + ' '
             current = current.next;
         }
         return str;
     }
     /* backworkString():返回正向遍历的节点字符串形式 */
     DoublyLinkedList.prototype.backworkString = function () {
         var current = this.tail;
         var str = ''
         while (current) {
             str += current.data + ' '
             current = current.prev;
         }
         return str;
     }
 }

let list1 = new DoublyLinkedList()

rl.question('请输入链表长度:', (a) => {
    rl.question('请输入链表中的元素:', (str) => {
        rl.question('请输入你要逆置的数量:', (n) => {
            const len = str.length
            for (let i = 0; i < len; i++) {
                list1.append(str[i])
            }
            for (let i = (+n - 1); i >= 0; i++) {
                if (i == (+n - 1)) {
                    let node = list1.get(+n)
                    let node1 = list1.get(i)
                    node.prev = list1.head
                    list1.head = node1
                    node1.prev = null
                    node1.next = node.prev
                }
                else {
                    let tempNode = node.next
                    node.next = node.prev
                    node.prev = tempNode
                }
            }
            rl.close()
        })
    })
});

