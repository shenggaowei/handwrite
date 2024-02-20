
export function outputStr(str: string) {
    return 'hello' + str;
}

function expect(result: string) {
    return {
        toBe(value: string) {
            if (result !== value) {
                throw Error('outputStr is not working')
            }
        }
    }
}

function test(msg: string, fn: Function) {
    try {
        fn();
        console.log(msg + ' 测试通过!')
    } catch (e) {
        console.log(msg + '测试未通过!')
        console.log(e)
    }
}

test('测试 helloworld', () => {
    expect(outputStr('world')).toBe('helloworld') // 测试通过
})
