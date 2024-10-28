const _Promise = require(".");

// todo jest 如何测试自定义 promise 呢
describe("手写 Promise", () => {
  test("测试 promise.then", () => {
    const p = new _Promise((resolve) => {
      setTimeout(() => {
        resolve("success");
      }, 1000);
    });
    function callback(data) {
      expect(data).toBe("success");
      done();
    }
    return p.then(callback);
  });
});
