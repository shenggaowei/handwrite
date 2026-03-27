
/**
 * 时间复杂度 o(n)
 * 空间复杂度 o(n)
 */
var findLengthOfLCIS = function(nums) {
    let arr = [];
    let maxLen = 0 
    for(let i = 0; i < nums.length; i ++){
        if(arr.length === 0) {
            arr.push(nums[i])
        } else {
            const top = arr[arr.length - 1]
            if(nums[i] > top) {
                arr.push(nums[i])
            } else {
                arr = [nums[i]]
            }
        }
        if(arr.length > maxLen) {
            maxLen = arr.length
        }
    }
    return maxLen
};