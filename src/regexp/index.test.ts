import { testStr2, testStr, testStr3 } from './data';
import { getMatchStr, getImgSrc } from './htmlTags';

describe('regexp/htmlTags', () => {
    test('获取 img 标签', () => {
        const res = getMatchStr(testStr3)
        expect(res.length).toBe(3)
    })
    test('获取 img src 属性', () => {
        const res = getImgSrc(testStr)
        expect(res.length).toBe(2)
    })
})