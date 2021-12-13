// // 基数排序算法
// let counter = []
// function radixSort(arr, maxDigit) {
//     var mod = 10;
//     var dev = 1;
//     for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
//         for (var j = 0; j < arr.length; j++) {
//             var bucket = parseInt((arr[j].score % mod) / dev);
//             if (counter[bucket] == null) {
//                 counter[bucket] = [];
//             }
//             counter[bucket].push(arr[j]);
//         }
//         var pos = 0;
//         for (var j = 0; j < counter.length; j++) {
//             var value = null;
//             if (counter[j] != null) {
//                 while ((value = counter[j].shift()) != null) {
//                     arr[pos++] = value;
//                 }
//             }
//         }
//     }
//     return arr;
// }
// // 线性表
// class List {
//     //初始化
//     constructor(...args) {
//         this.list = [...args]
//     }
//     //摧毁
//     destoryList() {
//         this.list = null;
//     }
//     //清空
//     clearList() {
//         this.list = [];
//     }
//     //是否为空
//     listEmpty() {
//         return this.list.length == [] ? true : false;
//     }
//     //查询长度
//     listLength() {
//         return this.list.length
//     }
//     //获得元素
//     getElem(i) {
//         return this.list[i];
//     }
//     //查找元素
//     locateElem(e) {
//         const len = this.list.length
//         for (let i = 0; i < len; i++) {
//             if (this.list[i] == e)
//                 return i
//             if (i == len - 1)
//                 return false
//         }
//     }
//     //查找前驱
//     priorElem(e) {
//         if (e == this.list[0])
//             return false
//         for (let i = 0; i < len; i++)
//             if (this.list[i] == e)
//                 return this.list[i - 1]
//     }
//     //查找后继
//     nextElem(e) {
//         const len = this.list.length
//         if (e == this.list[len - 1])
//             return false
//         for (let i = 0; i < len; i++)
//             if (this.list[i] == e)
//                 return this.list[i + 1]
//     }
//     //插入
//     listInsert(i, e) {
//         const len = this.list.length
//         for (let k = 0; k <= len; k++) {
//             if (k == i) {
//                 this.list.length = len + 1
//                 for (let j = len; j > i; j--)
//                     this.list[j] = this.list[j - 1]
//                 this.list[i] = e
//                 break;
//             }
//         }
//     }
//     //删除
//     listDelete(i) {
//         const len = this.list.length
//         for (let k = 0; k < len; k++) {
//             if (k == i) {
//                 const e = this.list[i]
//                 for (let j = i; j < len - 1; j++)
//                     this.list[j] = this.list[j + 1]
//                 this.list.length = len - 1
//                 return e
//             }
//         }
//     }
//     //打印
//     listTraverse() {
//         this.list.forEach((i) => {
//             console.log(i);
//         })
//     }
// }
// class Student {
//     constructor(id, name, score) {
//         this.id = id
//         this.name = name
//         this.score = score
//     }
// }
// const a = new Student(1, '小花', 24)
// const b = new Student(2, '小红', 12)
// const c = new Student(3, '小丑', 100)
// const d = new Student(4, '小刚', 72)
// const e = new Student(5, '小蜘蛛', 55)

// const students = new List(a, b, c, d, e)
// for (i = 1; i <= students.list.length; i++) {
//     console.log(`第${i}个学生`, students.list[i-1]);
// }
// console.log('经过排序后')
// const newStudents = radixSort(students.list, 3)
// console.log(newStudents);