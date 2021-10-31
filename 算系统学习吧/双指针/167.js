/* 
题目描述
  在一个增序的整数数组里找到两个数，使它们的和为给定值。已知有且只有一对解。
输入输出样例
输入是一个数组(numbers)和一个给定值(target)。输出是两个数的位置，从 1 开始计数。 Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
*/

var twoSum = function (numbers, target) {
    // 定义左右双指针
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        if (numbers[left] + numbers[right] > target) {
            right -= 1;
        } else if (numbers[left] + numbers[right] < target) {
            left += 1;
        } else {
            return [left + 1, right + 1];
        }
    }
};