var rob = function (nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    const length = nums.length;
    if (length === 1) {
        return nums[0];
    }
    let max = [];
    max[0] = nums[0];
    max[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < length; i++) {
        max[i] = Math.max(max[i - 2] + nums[i], max[i - 1]);
    }

    return max[length - 1];
};