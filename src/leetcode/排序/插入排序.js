/**
 * 时间复杂度 最好o(n) 最坏o(n2)
 * 空间复杂度 o(1) 
 */

function insertSort(arr) {
    let temp;
    for (let i = 1; i < arr.length; i ++) {
        if(arr[i] < arr[i-1]) {
            // 暂存一下当前值
            temp = arr[i]
            let j = i - 1;
            while(j >= 0 && temp < arr[j]) {
                // 向右移动
                arr[j+1] = arr[j]
                j --;
            }
            // 退出循环后，如果j到了第一项,那么此时 j < 0。j 为 -1;
            arr[j + 1] = temp;
        }
    }
    return arr
}

const arr = [2,3,1]

insertSort(arr)

console.log(arr)