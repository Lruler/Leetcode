// 交换位置
const swap = (array, a, b) => {
    [array[a], array[b]] = [array[b], array[a]]
}
// 冒泡排序 n^2 稳定
const bubbleSort = (array) => {
    const {length} = array
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) swap(array, j, j + 1)
        }
    }
    return array
}

// 选择排序 n^2 不稳定
const selectSort = (array) => {
    const {length} = array
    let indexMin
    for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            swap (array, i, indexMin)
        }
    }
    return array
}

// 插入排序 n^2 稳定
const insertSort = (array) => {
    const {length} = array
    let temp
    for (let i = 0; i < length; i++) {
        let j = i
        temp = array[i]
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp
    }
    return array
}

// 归并排序 nlogn 稳定
function mergeSort(arr) {  // 采用自上而下的递归方法
    function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

// 快速排序 nlogn 不稳定

console.log(mergeSort([7,5,4,1,12]));