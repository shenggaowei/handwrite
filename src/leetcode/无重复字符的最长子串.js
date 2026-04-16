/**
 *  滑动窗口，low 左指针，high 右指针
 *  移动 high 指针，当前匹配串为 s.slice(low, high)，注意边界条件，不取 high 位的字符。
 *  移动 low 指针，使 low 指针 位于到匹配串中重复字符之后
 *  - while 循环，每次循环若存在则 low ++，直到不符合循环条件
 *  - 使用 Map 优化，在 map 中存储移动每个 high 位的字符和其下标。如果匹配，则 low 为当前字符的下标+1
 *      - abba 需要保证 map 当中存储的值 >= low，防止找到之前的匹配值，只对比 low 指针之后的值
 *  重新计算 count，count 为已存在的 count 和当前 high-low+1 的最大值
 */

/**
 *  时间复杂度 o(n2)
 *  空间复杂度 o(1)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count = 0, low = 0;
    // 为什么 high 从 0 开始呢？high = 1 会跳过一个字符的情况
    for(let high = 0; high < s.length; high ++) {
        while(low <= high && s.slice(low, high).includes(s[high])) {
            low ++;
        }
        count = Math.max(count, high - low + 1)
    }
    return count
};

/**
 *  时间复杂度 o(n)
 *  空间复杂度 o(min(m,n))
 * @param {string} s 
 * @returns {number}
 */
var lengthOfLongestSubstring = function(s) {
    let strMap = new Map(), low = 0, count = 0; 
    for(let high = 0; high < s.length; high ++) {
        if(strMap.has(s[high]) && strMap.get(s[high]) >= low) {
            low = strMap.get(s[high]) + 1; 
        }
        strMap.set(s[high], high)
        count = Math.max(count, high - low + 1)
    }
    return count
}


console.time()
const ret = lengthOfLongestSubstring('abbbccccccccbbbbbccc')
console.timeEnd()
console.log(ret)