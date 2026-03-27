/**
 * 时间复杂度 o(n2)
 * 空间复杂度 o(1) 
 */
function selectionBubble(arr) {
    for(let i = 0; i < arr.length - 1; i ++) {
        for (let j = i + 1; j < arr.length; j ++) {
            if(arr[j] < arr[i])  {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}


const arr = [3,2,1,5,4]

selectionBubble(arr)
console.log(arr)