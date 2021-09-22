
//定义线性表
class List {
    //初始化
    constructor(...args){
        this.list = [...args]
    }
    //摧毁
    destoryList(){
        this.list = null;
    }
    //清空
    clearList(){
        this.list = [];
    }
    //是否为空
    listEmpty(){
        return this.list.length == [] ? true : false;
    }
    //查询长度
    listLength(){
        return this.list.length
    }
    //获得元素
    getElem(i){
        return this.list[i];
    }
    //查找元素
    locateElem(e){
        const len = this.list.length
        for(let i = 0; i < len; i++){
            if(this.list[i] == e)
                return i
            if(i == len - 1)
                return false
        }
    }
    //查找前驱
    priorElem(e){
        if(e == this.list[0])
            return false
        for(let i = 0; i < len; i++)
            if(this.list[i] == e)
                return this.list[i - 1]
    }
    //查找后继
    nextElem(e){
        const len = this.list.length
        if(e == this.list[len - 1])
            return false
        for(let i = 0; i < len; i++)
            if(this.list[i] == e)
                return this.list[i + 1]
    }
    //插入
    listInsert(i,e){
        const len = this.list.length
        for(let k = 0; k <= len; k++){
            if(k == i){
                this.list.length = len + 1
                for(let j = len; j > i; j--)
                    this.list[j] = this.list[j - 1]
                this.list[i] = e
                break;
            }
        }
    }
    //删除
    listDelete(i){
        const len = this.list.length
        for(let k = 0; k < len; k++){
            if(k == i){
                const e = this.list[i]
                for(let j = i; j < len - 1; j++)
                    this.list[j] = this.list[j + 1]
                this.list.length = len - 1
                return e
            }
        }
    }
    //打印
    listTraverse(){
        this.list.forEach((i) => { 
            console.log(i);
         })
    }
}

let list1 = new List(1,2,3,4)
let list2 = new List(2,4,5,7,8)

// 得并集 销毁B表的操作
const union = (list1,list2) => {
    while(!list2.listEmpty()){
        const e = list2.listDelete(0)
        if(!list1.locateElem(e)){
            list1.listInsert(list1.listLength(),e)
        }
    }
    list2.destoryList()
    console.log(list1);
    console.log(list2);
    return list1
}
// 得并集 放在新集合中
const union2 = (list1,list2) => {
    let list = new List()
    for(let i = 0; i < list1.listLength(); i++){
        list.listInsert(list.listLength(),list1.getElem(i))
    }
    for(let i = 0; i < list2.listLength(); i++){
        const e = list2.getElem(i)
        if(!list.locateElem(e)){
            list.listInsert(list.listLength(),e)
        }
    }
    console.log(list1);
    console.log(list2);
    console.log(list);
    return list
}
// 得交集 
const intersection = (list1,list2) => {
    let list = new List()
    for(let i = 0; i < list1.listLength(); i++){
        const e = list1.getElem(i)
        if(list2.locateElem(e) !== false){
            list.listInsert(list.listLength(),e)
        }
    }
    console.log(list);
    return list
}
// 得差集
const subtraction = (list1,list2) => {
    let list = new List()
    for(let i = 0; i < list1.listLength(); i++){
        const e = list1.getElem(i)
        if(list2.locateElem(e) === false){
            list.listInsert(list.listLength(),e)
        }
    }
    console.log(list);
    return list
}






