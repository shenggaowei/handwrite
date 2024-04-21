import { Bird } from ".";

describe('单例模式', () => {
    test('test single instance', () => {
        const a = new Bird()
        const b = new Bird()
        expect(a).toEqual(b);
    })
})

