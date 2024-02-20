import { analyzeUrl } from ".";

describe('解析 url 参数', () => {
    test('0个参数', () => {
        const testUrl = "https://hblg.hq-gsc.com/sda#/staging";
        expect(analyzeUrl(testUrl)).toEqual({
        });
    });

    test('1个参数', () => {
        const testUrl = "https://hblg.hq-gsc.com/sda?name=shenggao#/staging";
        expect(analyzeUrl(testUrl)).toEqual({
            name: 'shenggao',
        });
    });

    test('2个参数', () => {
        const testUrl = "https://hblg.hq-gsc.com/sda?name=shenggao&age=18#/staging";
        expect(analyzeUrl(testUrl)).toEqual({
            name: 'shenggao',
            age: "18"
        });
    });

    test('0个hash', () => {
        const testUrl = "https://hblg.hq-gsc.com/sda?name=shenggao&age=18";
        expect(analyzeUrl(testUrl)).toEqual({
            name: 'shenggao',
            age: "18"
        });
    });

    test('0个hash，0个参数', () => {
        const testUrl = "https://hblg.hq-gsc.com/sda";
        expect(analyzeUrl(testUrl)).toEqual({
        });
    });
})

