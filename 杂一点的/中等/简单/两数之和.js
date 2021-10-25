// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 

var twoSum = function (nums, target) {
    for(let i =0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if (nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
}