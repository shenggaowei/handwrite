const { Deferred } = require(".");

describe("手写 Promise", () => {
  test("测试 promise.then", () => {
    const promisify = function () {
      const deferred = new Deferred();
      setTimeout(() => {
        deferred.resolve("success");
      }, 1000);
      return deferred.promise;
    };
    return expect(promisify()).resolves.toBe("success");
  });

  test("测试 promise.reject", (done) => {
    const promisify = function () {
      const deferred = new Deferred();
      setTimeout(() => {
        deferred.reject("errors");
      }, 1000);
      return deferred.promise;
    };

    promisify().catch((err) => {
      expect(err).toBe("errors");
      done();
    });
  });
});
