/**
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
示例 1：

输入：x = 123
输出：321
示例 2：

输入：x = -123
输出：-321
示例 3：

输入：x = 120
输出：21
示例 4：

输入：x = 0
输出：0 */
 var reverse = function(x) {
    let result = 0
  
    while(x !== 0) {
      result = result * 10 + x % 10
      x = x / 10 | 0
    }
  
    return (result | 0) === result ? result : 0
};
  
// |运算符还能进行取整运算: |是按位或运算符 （转成二进制后有一个是1则两个结果都是1）
// console.log(2.23 | 0)//2



// Math.floor() 向下取整 Math.floor(3. ...
//     Math.ceil() 向上取整 Math.ceil(3. ...
//     Math.round() 四舍五入 Math.round(3. ...
//     parseInt() 去掉小数点和小数点后的部分 ...
//     ~~ 将数据转化为Number类型
//  用|按位或运算符