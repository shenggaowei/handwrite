/**
 * @param {string} s
 * @return {boolean}
 * 时间复杂度 o(n)
 * 空间复杂度 
 */
var isValid = function(s) {
    const validMap = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])
    let stack = [], sList = s.split('')
    while(sList.length) {
        // shift 移动
        const top = sList.shift()
        const lastIndex = stack[stack.length - 1]
        if(top === validMap.get(lastIndex)) {
            stack.pop()
        } else {
            stack.push(top)
        }
    }
    return stack.length === 0
};

var isValid = function(s) {
    // 如果是奇数直接 return
    if(!s.length || s.length % 2 !== 0) {
        return false
    }
    const validMap = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])
    let stack = []
    for(let char of s) {
        // 判断左括号
        if(validMap.has(char)) {
            // 遇到的是左括号，直接推进栈中
            stack.push(char)
        } else {
            // 判断右括号是否匹配，栈为空或者不匹配，返回 false
            if(!stack.length || char !== validMap.get(stack.pop())) {
                return false
            }
        }
    }
    return stack.length === 0
}

const str = '()'
console.log(isValid(str))