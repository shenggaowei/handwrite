import doubleSort from ".";

describe('双指针排序', () => {
    test('有序列表合并1', () => {
        const a = [38, 48, 65, 97];
        const b = [13, 27, 76]
        const ret = [13, 27, 38, 48, 65, 76, 97]
        expect(doubleSort(a, b)).toEqual(ret);
    })
    test('有序列表合并2', () => {
        const a = [38, 48, 65, 97];
        const b = [13, 27, 76, 100]
        const ret = [13, 27, 38, 48, 65, 76, 97, 100]
        expect(doubleSort(a, b)).toEqual(ret);
    })
})

