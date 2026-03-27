/**
 * 时间复杂度 o(n2) 
 * 空间复杂度 o(1)
 */
function bubbleSort(arr) {
    // 外层循环控制遍历的次数
    for(let i = 0; i < arr.length; i ++) {
        // 内层循环对比比较，其中已经排好序的可以跳过。（-i）
        // j < arr.length - 1； 只可取到最后一项的前一项，应为 j 和 j + 1进行对比，不用取最后一项
        for(let j = 0; j < arr.length - 1 - i; j ++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}


const arr = [3,2,1,5,4]

const ret = bubbleSort(arr)
console.log(arr)