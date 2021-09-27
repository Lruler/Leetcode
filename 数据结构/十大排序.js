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
function quickSort (arr) {
    return quick(arr, 0, arr.length - 1)
}

const partition = (array, left, right) => {
    const pivot = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right
    
    while (i <= j) {
        while (array[i] < pivot) {
            i++
        }
        while (array[i] > pivot) {
            j--
        }
        if (i <= j) {
            swap(array, i, j)
            i++
            j--
        }
    }
    return i
}

const quick = (array, left, right) => {
    let index

    if (array.length > 1) {
        index = partition(array, left, right)
        if (left < index - 1) {
            quick(array, left, index - 1)
        }
        if (index < right) {
            quick(array, index, right)
        }
    }
    return array
}

// 希尔排序 nlogn 不稳定
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}


// 堆排序 nlogn 稳定
function heapSort(arr) {
    let len

    function buildMaxHeap(arr) {
        len = arr.length
        for (var i = Math.floor(len/2); i >= 0; i--) {
            heapify(arr, i);
        }
    }

    function heapify(arr, i) {     // 堆调整
        var left = 2 * i + 1,
            right = 2 * i + 2,
            largest = i;
    
        if (left < len && arr[left] > arr[largest]) {
            largest = left;
        }
    
        if (right < len && arr[right] > arr[largest]) {
            largest = right;
        }
    
        if (largest != i) {
            swap(arr, i, largest);
            heapify(arr, largest);
        }
    }

    buildMaxHeap(arr)

    for (let i = arr.length - 1; i > 0; i++) {
        swap(arr, 0, i)
        len--
        heapify(arr, 0)
    }

    return arr
}

// 计数排序 n + k 稳定

function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue+1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;

    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
}

// 桶排序 计数排序升级 稳定
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
      return arr;
    }

    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];                // 输入数据的最小值
      } else if (arr[i] > maxValue) {
          maxValue = arr[i];                // 输入数据的最大值
      }
    }

    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;  
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                      
        }
    }

    return arr;
}