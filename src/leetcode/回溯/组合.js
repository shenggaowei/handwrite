/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let path = [],result = [];
    backTracing(n, k, 1, path, result)
    return result
};

function backTracing(n, k ,startIndex, path, result) {
    if(path.length === k) {
        result.push(path.slice())
        return
    }
    for(let i = startIndex; i <= n; i++) {
        path.push(i);
        backTracing(n, k, i+1, path, result);
        path.pop()
    }
}

let ret = combine(1,1);
console.log(ret)
