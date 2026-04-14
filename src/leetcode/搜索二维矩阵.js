/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 时间复杂度 o(m+m)
 * 空间复杂度 o(1)
 */
var searchMatrix = function (matrix, target) {
    let col = matrix[0].length - 1;
    let row = 0;
    while(row < matrix.length && col >= 0) {
        const num = matrix[row][col]
        if (num === target) {
                return true
            } else if (num > target) {
                col --
            } else if (num < target) {
                row ++
            }
        }
    return false
};

let matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]



const ret = searchMatrix(matrix, 20)
console.log(ret)