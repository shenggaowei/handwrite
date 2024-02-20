export function outputStr(str: string) {
    return 'hello' + str;
}

export const testParam = 'world'
export const testResult = 'helloworld';
export const testValue = outputStr('Hello')

if (testResult !== testResult) {
    throw Error('outputStr is not working')
}
