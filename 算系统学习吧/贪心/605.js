/* 
假设有一个很长的花坛， 一部分地块种植了花， 另一部分却没有。 可是， 花不能种植在相邻的地块上， 它们会争夺水源， 两者都会死去。
给你一个整数数组 flowerbed 表示花坛， 由若干 0 和 1 组成， 其中 0 表示没种植花， 1 表示种植了花。 另有一个数 n， 能否在不打破种植规则的情况下种入 n 朵花？ 能则返回 true， 不能则返回 false。
示例 1：
输入： flowerbed = [1, 0, 0, 0, 1], n = 1
输出： true
*/

var canPlaceFlowers = function (flowerbed, n) {
    let f = 0
    const len = flowerbed.length
    for (let i = 0; i < len; ++i) {
        if (flowerbed[i] === 1) {
            if (flowerbed[i + 2] == 1 || flowerbed[i + 2] == undefined) continue;
            else {
                flowerbed[i + 2] = 1
                f++
            }
        }
    }
    for (let i = len - 1; i > -1; --i) {
        if (flowerbed[i] === 1) {
            if (flowerbed[i - 2] == 1 || flowerbed[i - 2] == undefined) continue
            else {
                flowerbed[i - 2] = 1
                f++
            }
        }
    }
    return f == n
};

console.log(canPlaceFlowers([1,0,0,0,1],1))
