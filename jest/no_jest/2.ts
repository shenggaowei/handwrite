
export function outputStr(str: string) {
    return 'hello' + str;
}

function expect(result: string) {
    return {
        toBe(value: string) {
            if (result !== value) {
                throw Error('outputStr is not working')
            }
            console.log('测试通过')
        }
    }
}


expect(outputStr('world')).toBe('helloworld') // 测试通过