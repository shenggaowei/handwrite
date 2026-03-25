/**
 * 时间复杂度 o(n*log(n)) 最坏 o(n2) 
 * 空间复杂读 平均 O(log n)，最坏 O(n)
 */
/**
* 先定基准，左右双扫；
* 相遇归位，递归左右。
* 一句解释：
* 先定基准：选 arr [left] 当 base
* 左右双扫：j 左找小，i 右找大
* 相遇归位：i = j 时把 base 放中间
* 递归左右：左 left~i-1，右 i+1~right 
 */
function quickSort(arr, low, high) {
    if(low > high) {
        return
    }
    let p = arr[low];
    let initLow = low;
    let initHigh = high;
    while(low < high) {
        // 防止指针越界
        while(low < high && arr[high] > p) {
            high --;
        }
        // 防止指针越界
        arr[low] = arr[high];
        while(low < high && arr[low] < p) {
            low ++;
        }
        arr[high] = arr[low]
    }
    // 相遇的地方是基础的位置，左侧都比基准小，右侧都比基准大。
    arr[low] = p;
    quickSort(arr, initLow, low-1);
    quickSort(arr, low+1, initHigh)
}

const arr = [3,2,1,5,4]

const ret = quickSort(arr, 0 , 4)
console.log(arr)
