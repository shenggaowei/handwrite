/**
 * 递归 on(2)
 * @param {*} n 
 */
function fibonacci(n) {
    if(n == 1) {
        return 1
    }
    if(n == 0) {
        return 0
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(7))

// f(3) = f(2) + f(1)
// f(2) = f(1) + f(0)

// f(1) = 1;
// f(0) = 0;

// f(n) = f(n-1) + f(n-2)

/**
 * 迭代思路 o(n)
 * @param {*} n 
 * @returns 
 */
function fibonacci2(n) {
    if(n == 1) { return 1}
    if(n == 0) { return 0}
    let a = 0, b = 1, temp;
    for (let i = 2; i <=n; i ++){
        temp = a + b;
        a = b;
        b = temp
    }
    return b
}

/**
 * 动态规划
 */
function fibonacci3(n){
    const dp = [0, 1]
    for(let i=2; i <= n; i++ ) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
